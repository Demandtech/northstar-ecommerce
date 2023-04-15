import { useContext, createContext, useReducer, useState } from 'react'
import userReducer from '../reducers/userReducer'

const UserContext = createContext()

const initialState = {
  authenticated: true,
  user: {},
}

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, initialState)
  const [openSetup, setOpenSetup] = useState(false)

  const handleLogin = (email, password) => {
    console.log(email, password)
  }

  const handleLogout = () => {
    console.log('clicked')
    setOpenSetup(false)
  }

  const handleRegister = (fName,lName, email, password)=> {
    console.log(fName,lName, email, password)
  }

  const handleOpenSetup = () => {
    console.log('clicked')
    setOpenSetup(!openSetup)
  }

  

  return (
    <UserContext.Provider value={{ ...state, handleLogin, handleRegister, handleOpenSetup, openSetup, handleLogout }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
