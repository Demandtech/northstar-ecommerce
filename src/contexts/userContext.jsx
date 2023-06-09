import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import userReducer from '../reducers/userReducer'
import {
  LOGIN_SUCCESS,
  LOG_OUT,
  GET_USER,
  LOGIN_FAILURE,
  START_BTN_LOADING,
  STOP_BTN_LOADING,
} from '../actions'
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
  updateDoc,
  serverTimestamp,
} from 'firebase/firestore'
import { generateRandomNumber } from '../utils/helpers'

import { toast } from 'react-toastify'

const UserContext = createContext()

const initialState = {
  authenticated: !!localStorage.getItem('token'),
  user: JSON.parse(localStorage.getItem('user')) || {},
  error: { show: false, msg: '' },
  btnLoading: false,
}

const auth = getAuth()
const firestore = getFirestore()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)

  const getUser = (id) => {
    const userRef = doc(firestore, 'users', id)

    getDoc(userRef).then((doc) => {
      if (doc.exists()) {
        localStorage.setItem('user', JSON.stringify(doc.data()))
        dispatch({ type: GET_USER, payload: doc.data() })
      }
    })
  }

  const emailLogin = (e, user) => {
    e.preventDefault()
    dispatch({ type: START_BTN_LOADING })
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
          toast.success('Login Successfully')
          dispatch({ type: LOGIN_SUCCESS })
        }
        dispatch({ type: STOP_BTN_LOADING })
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: '',
        })
        toast.error('Check Email and Password')
        dispatch({ type: STOP_BTN_LOADING })
      })
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({ type: LOG_OUT })
  }

  const handleRegister = (newUser) => {
    dispatch({ type: START_BTN_LOADING })
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
          dispatch({ type: LOGIN_SUCCESS })
          toast.success('Registration successfull')
        }

        setDoc(doc(firestore, 'users', userId), {
          firstName: payload.first_name,
          lastName: payload.last_name,
          email: payload.email,
          id: userId,
          cart: [],
          order: [],
          billing_address: {},
        })
        dispatch({ type: STOP_BTN_LOADING })
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILURE, payload: '' })
        dispatch({ type: STOP_BTN_LOADING })
        toast.error('Email is already taken')
      })
  }

  const handleSubmitBillingAddress = (billing, total) => {
    dispatch({ type: START_BTN_LOADING })
    const userId = state.user?.id

    const userRef = doc(firestore, 'users', userId)

    getDoc(userRef).then((snapshot) => {
      const newOrder = snapshot.data().cart

      updateDoc(userRef, {
        billing_address: billing,
        order: [
          ...snapshot.data().order,
          {
            order_number: generateRandomNumber(),
            amount: total,
            item: newOrder,
            createdAt: new Date().toISOString(),
            status: 'Unpaid',
          },
        ],
        cart: [],
      })
        .then(() => {
          dispatch({ type: STOP_BTN_LOADING })
          setIsOrderComplete(true)
        })
        .catch((err) => {
          dispatch({ type: STOP_BTN_LOADING })
          console.log(err)
        })
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
        handleSubmitBillingAddress,
        isOrderComplete,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
