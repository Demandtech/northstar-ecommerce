import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import userReducer from '../reducers/userReducer'
import { LOGIN_SUCCESS } from '../actions'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

const initialState = {
  authenticated: false,
  user: {},
}

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)
  const [messages, setMessages] = useState({ success: '', error: '' })
  
 

  const emailLogin = (e) => {
    e.preventDefault()
  }

  const handleLogout = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
    setOpenSetup(false)
  }

  const handleRegister = (newUser) => {
    let payload = {
      first_name: newUser.fName,
      last_name: newUser.lName,
      email: newUser.email,
      password: newUser.pass2,
    }
    fetch('http://localhost/northstar/newuser.php/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMessages({ success: data.message, error: data.error })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleOpenSetup = () => {
    setOpenSetup(!openSetup)
  }

  const handleNewsLetter = (email) => {
    console.log(email)
  }

  const googleLogin = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const facebookLogin = () => {
    window.open('http://localhost:5000/auth/facebook', '_self')
  }

  const getUser = async () => {
    fetch('http://localhost:5000/auth/login/success', {
      method: 'GET',
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json()
        }
        throw new Error('authentication failed')
      })
      .then((resObj) => {
        dispath({ type: LOGIN_SUCCESS, payload: resObj })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getUser()
  }, [])

  useEffect(()=> {
    setTimeout(()=>{
      setMessages({...messages, success: ''})
    }, 1500)
  }, [messages])

  return (
    <UserContext.Provider
      value={{
        ...state,
        emailLogin,
        handleRegister,
        handleOpenSetup,
        openSetup,
        handleLogout,
        handleNewsLetter,
        googleLogin,
        getUser,
        facebookLogin,
        messages,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
