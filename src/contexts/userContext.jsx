import React, {
  useContext,
  createContext,
  useReducer,
  useState,
  useEffect,
} from 'react'
import userReducer from '../reducers/userReducer'
import axios from 'axios'

import {
  LOGIN_SUCCESS,
  LOG_OUT,
  GET_USER,
  LOGIN_FAILURE,
  START_BTN_LOADING,
  STOP_BTN_LOADING,
} from '../actions'
import { toast } from 'react-toastify'

const UserContext = createContext()

const initialState = {
  user: {},
  error: { show: false, msg: '' },
  btnLoading: false,
  authenticated: false,
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)
  const [isOrderComplete, setIsOrderComplete] = useState(false)
  const baseUrl = import.meta.env.VITE_APP_BASE_URL
  const token = localStorage.getItem('token')

  const getAuthUser = async () => {
    if (token) {
      try {
        const { data, status } = await axios.get(`${baseUrl}/users/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (status === 200) {
          dispatch({ type: GET_USER, payload: data.user })
        }
      } catch (err) {
        localStorage.removeItem('token')
        console.log(err.response?.data?.detail)
      }
    }
  }

  useEffect(() => {
    getAuthUser()
  }, [token])

  const handleEmailLogin = async (user) => {
    dispatch({ type: START_BTN_LOADING })

    let isSuccess

    try {
      const form = new FormData()

      form.append('username', user.email)
      form.append('password', user.password)

      const { status, data } = await axios.post(`${baseUrl}/login`, form)
      if (status === 200) {
        getAuthUser()
        localStorage.setItem('token', data.access_token)
      }
      dispatch({ type: STOP_BTN_LOADING })
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      })

      isSuccess = status === 200

      return isSuccess
    } catch (err) {
      dispatch({ type: STOP_BTN_LOADING })
      isSuccess = false
      if (err.response.status === 403) {
        toast.error(err.response?.data?.detail)
      }
      console.log(err)
      return isSuccess
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({ type: LOG_OUT })
    toast.info('Logout successfully')
  }

  const handleRegister = async (newUser) => {
    dispatch({ type: START_BTN_LOADING })
    let isSuccess

    try {
      if (newUser) {
        const { status } = await axios.post(`${baseUrl}/users`, newUser)
        if (status === 201) {
          dispatch({ type: STOP_BTN_LOADING })
          toast.success('Registration successfull')
        }
        isSuccess = status === 201

        return isSuccess
      }
    } catch (err) {
      dispatch({ type: STOP_BTN_LOADING })

      if (err.response.status == 400) {
        toast.error(err.response.data.detail)
      } else {
        toast.error('An error occured! Please try again later')
      }

      isSuccess = false

      return isSuccess
    }
  }

  const handleVerifyUser = async (token) => {
    dispatch({ type: START_BTN_LOADING })
    let isSuccess
    try {
      const { status } = await axios.post(`${baseUrl}/users/verify_user`, {
        token: token,
      })
      isSuccess = status === 202
      dispatch({ type: STOP_BTN_LOADING })
      return isSuccess
    } catch (err) {
      console.log(err)
      dispatch({ type: STOP_BTN_LOADING })
      isSuccess = false
      return isSuccess
    }
  }

  const handleForgotPassword = async (email) => {
    dispatch({ type: START_BTN_LOADING })
    let isSuccess
    try {
      const { status, data } = await axios.post(
        `${baseUrl}/users/forgot_password`,
        {
          email: email,
        }
      )
      isSuccess = status === 200
      dispatch({ type: STOP_BTN_LOADING })

      return isSuccess
    } catch (err) {
      console.log(err)
      dispatch({ type: STOP_BTN_LOADING })
      isSuccess = false
      return isSuccess
    }
  }

  const handleChangePassword = async (payload) => {
    dispatch({ type: START_BTN_LOADING })
    let isSuccess
    try {
      const { status, data } = await axios.post(
        `${baseUrl}/users/change_password`,
        payload
      )
      console.log(status, data)

      isSuccess = status === 205
      dispatch({ type: STOP_BTN_LOADING })

      return isSuccess
    } catch (err) {
      isSuccess = false
      dispatch({ type: STOP_BTN_LOADING })
      return isSuccess
    }
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
        handleEmailLogin,
        handleChangePassword,
        handleRegister,
        handleOpenSetup,
        openSetup,
        handleLogout,
        handleNewsLetter,
        isOrderComplete,
        handleForgotPassword,
        handleVerifyUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
