import { useContext, createContext, useReducer, useState } from 'react'
import userReducer from '../reducers/userReducer'

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
    console.log('clicked')
    setOpenSetup(false)
  }

  const handleRegister = (newUser)=> {
   console.log(newUser)
  }

  const handleOpenSetup = () => {
    console.log('clicked')
    setOpenSetup(!openSetup)
  }

  const handleNewsLetter = (email)=> {
    console.log(email)
  }

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
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
