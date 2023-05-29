import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import userReducer from '../reducers/userReducer'
import { LOGIN_SUCCESS, LOG_OUT, GET_USER, LOGIN_FAILURE } from '../actions'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'

const UserContext = createContext()

const initialState = {
  authenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')) || {},
  error: { show: false, msg: '' },
  btnLoading:false
}

const auth = getAuth()
const firestore = getFirestore()

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)

  const getUser = (id) => {
    
    const userRef = doc(firestore, 'users', id)

    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
        localStorage.setItem('user', JSON.stringify(doc.data()))
        dispath({ type: GET_USER, payload: doc.data() })
      }
    })
  }

  const emailLogin = (e, user) => {
    e.preventDefault()
    dispath({type:'START_BTN_LOADING'})
    let payload = {
      email: user.email,
      password: user.password,
    }
    signInWithEmailAndPassword(auth, payload.email, payload.password)
      .then((cred) => {
        const userId = cred.user.reloadUserInfo.localId
        if (cred.user.accessToken) {
          localStorage.setItem('token', cred.user.accessToken)
          getUser(userId)
          dispath({ type: LOGIN_SUCCESS })
        }
        dispath({ type: 'STOP_BTN_LOADING' })
      })
      .catch((err) => {
        dispath({ type: LOGIN_FAILURE, payload: 'Email or password incorrect' })
        dispath({ type: 'STOP_BTN_LOADING' })
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispath({ type: LOG_OUT })
  }

  const handleRegister = (newUser) => {
    dispath({ type: 'START_BTN_LOADING' })
    let payload = {
      first_name: newUser.fName,
      last_name: newUser.lName,
      email: newUser.email,
      password: newUser.pass2,
    }
    createUserWithEmailAndPassword(auth, payload.email, payload.password)
      .then((cred) => {
        const userId = cred.user.uid

        if (cred.user.accessToken) {
          localStorage.setItem('token', cred.user.accessToken)
          getUser(userId)
          dispath({ type: LOGIN_SUCCESS })
        }

        setDoc(doc(firestore, 'users', userId), {
          firstName: payload.first_name,
          lastName: payload.last_name,
          email: payload.email,
          id: userId,
          cart: [],
          order: [],
        })
        dispath({ type: 'STOP_BTN_LOADING' })
      })
      .catch((err) => {
        dispath({ type: LOGIN_FAILURE, payload: 'Email is already taken' })
        dispath({ type: 'STOP_BTN_LOADING' })
      })
  }

  const handleOpenSetup = () => {
    setOpenSetup(!openSetup)
  }

  const handleNewsLetter = (email) => {
    console.log(email)
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
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
