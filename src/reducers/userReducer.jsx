import { LOGIN_SUCCESS, GET_USER, LOG_OUT, LOGIN_FAILURE } from '../actions'

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, authenticated: true, loginError:{show:false, msg:''} }
    case LOG_OUT:
      return { ...state, authenticated: false }
    case GET_USER:
      return {...state, user:action.payload}
    case LOGIN_FAILURE:
      return {...state, error:{show:true, msg:action.payload}}
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default userReducer
