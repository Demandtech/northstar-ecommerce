import {
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCT,
  ADD_TO_CART,
  COUNT_CART_TOTALS,
} from '../actions'
import { products } from '../utils/datas'

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      let females = action.payload.filter(
        (product) => product.type === 'female'
      )
      let males = action.payload.filter((product) => product.type === 'male')
      return { ...state, products: action.payload, males, females }
    case ADD_TO_CART:
      let newItem = {}
      let cartItem = state.cart.some((product) => product.id == action.payload)
      
      if (cartItem) {
        return state
      }
      newItem = state.products.find((product) => product.id === +action.payload)

      return { ...state, cart: [...state.cart, newItem] }
    case COUNT_CART_TOTALS:
      return { ...state, cart_total: state.cart.length }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
