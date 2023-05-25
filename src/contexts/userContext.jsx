import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import userReducer from '../reducers/userReducer'
import { LOGIN_SUCCESS, LOG_OUT, GET_USER } from '../actions'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from 'firebase/firestore'

const UserContext = createContext()

const initialState = {
  authenticated: !!localStorage.getItem('token'),
  user: {},
}

const auth = getAuth()
const firestore = getFirestore()

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)
  const [messages, setMessages] = useState({ success: '', error: '' })
  //const navigate = useNavigate()

  const emailLogin = (e, user) => {
    e.preventDefault()

    let payload = {
      email: user.email,
      password: user.password,
    }
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((cred) => {
        console.log(cred.user.accessToken)
        if (cred.user.accessToken) {
          localStorage.setItem('token', cred.user.accessToken)
          dispath({ type: LOGIN_SUCCESS })
        }
        getUser(cred.user.uid)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleLogout = () => {
    console.log('clicked')
    localStorage.removeItem('token')
    dispath({ type: LOG_OUT })
  }

  const handleRegister = (newUser) => {
    let payload = {
      first_name: newUser.fName,
      last_name: newUser.lName,
      email: newUser.email,
      password: newUser.pass2,
    }
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((cred) => {
        console.log(cred.user)
        const userId = cred.user.uid

        setDoc(doc(firestore, 'users', userId), {
          firstName: payload.first_name,
          lastName: payload.last_name,
          email: payload.email,
        })
        if (cred.user.accessToken) {
          dispath({ type: LOGIN_SUCCESS })
          getUser(userId)
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleOpenSetup = () => {
    setOpenSetup(!openSetup)
  }

  const handleNewsLetter = (email) => {
    console.log(email)
  }

  useEffect(() => {
    const timeOutid = setTimeout(() => {
      setMessages((prev) => ({ ...prev, success: '' }))
    }, 3000)

    return () => clearTimeout(timeOutid)
  })

  const getUser = (id) => {
    const userRef = doc(firestore, 'users', id)

    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
        dispath({ type: GET_USER, payload: doc.data() })
      }
    })
  }

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
