import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import userReducer from '../reducers/userReducer'
import {LOGIN_SUCCESS} from '../actions'

const UserContext = createContext()

const initialState = {
  authenticated: false,
  user: {},
}

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)

  const handleLogin = (user) => {
    console.log(user)
  }

  const handleLogout = () => {
    window.open('http://localhost:5000/auth/logout', '_self')
    setOpenSetup(false)
  }

  const handleRegister = (newUser) => {
    console.log(newUser)
  }

  const handleOpenSetup = () => {
    setOpenSetup(!openSetup)
  }

  const handleNewsLetter = (email) => {
    console.log(email)
  }

  const google = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const getUser = async () => {
   
    fetch('http://localhost:5000/auth/login/success', {
      method: 'GET',
      credentials: 'include',
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

  useEffect(()=>{
    getUser()
  }, [])

  return (
    <UserContext.Provider
      value={{
        ...state,
        handleLogin,
        handleRegister,
        handleOpenSetup,
        openSetup,
        handleLogout,
        handleNewsLetter,
        google,
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
