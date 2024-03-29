import {
  LOGIN_SUCCESS,
  GET_USER,
  LOG_OUT,
  LOGIN_FAILURE,
  STOP_BTN_LOADING,
  START_BTN_LOADING,
} from '../actions'

import { toast } from 'react-toastify'

const userReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        loginError: { show: false, msg: '' },
        user: action.payload,
      }
    case LOG_OUT:
      return { ...state, authenticated: false }
    case GET_USER:
      return { ...state, user: action.payload, authenticated: true }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: { show: true, msg: action.payload },
        authenticated: false,
      }
    case START_BTN_LOADING:
      return { ...state, btnLoading: true }
    case STOP_BTN_LOADING:
      return { ...state, btnLoading: false }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}
export default userReducer
