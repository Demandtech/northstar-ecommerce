import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_QUANTITY,
  DELETE_CART_ITEM,
  GET_ORDER,
  GET_CART,
  START_LOADING,
  STOP_LOADING,
} from '../actions'
import { toast } from 'react-toastify'

const cartReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, all_products: action.payload }
    case GET_CART:
      return {
        ...state,
        cart: action.payload.carts,
        total_amount: action.payload.total_amount,
        total_items: action.payload.total_carts,
      }
    case ADD_TO_CART:
      toast.success('New item added to cart')
      return state

    case GET_QUANTITY:
      let itemToUpdate = state.cart.find(
        (item) => item.id === action.payload.id
      )

      itemToUpdate.quantity = Number(action.payload.inputVal)

      return { ...state, cart: state.cart }
    case DELETE_CART_ITEM:
      toast.error('item deleted from cart')
      return state

    case GET_ORDER:
      return { ...state, orders: action.payload }
    case START_LOADING:
      return { ...state, loading: true }
    case STOP_LOADING:
      return { ...state, loading: false }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default cartReducer
