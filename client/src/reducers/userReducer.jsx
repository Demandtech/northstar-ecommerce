import { LOGIN_SUCCESS } from '../actions'

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { user } = action.payload
      console.log(user)
      return { ...state, authenticated: true, user }
    
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default userReducer
