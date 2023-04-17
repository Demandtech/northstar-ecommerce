import { LOGIN_SUCCESS } from '../actions'

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { user } = action.payload
      return { ...state, authenticated: true, user }
  }
}
export default userReducer
