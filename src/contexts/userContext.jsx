import { useContext, createContext, useReducer } from 'react'
import userReducer from '../reducers/userReducer'

const UserContext = createContext()

const initialState = {
  authenticated: false,
  user: {},
}

export const UserProvider = ({ children }) => {
  const [state, dispath] = useReducer(userReducer, initialState)

  const handleLogin = (email, password) => {
    console.log(email, password)
  }

  const handleRegister = (fName,lName, email, password)=> {
    console.log(fName,lName, email, password)
  }

  return (
    <UserContext.Provider value={{ ...state, handleLogin, handleRegister }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
