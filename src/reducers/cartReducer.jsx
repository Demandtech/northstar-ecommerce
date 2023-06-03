import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_QUANTITY,
  DELETE_CART_ITEM,
  COUNT_CART_TOTALS,
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
      return { ...state, cart: action.payload }
    case ADD_TO_CART:
      let itemExist = state.cart.some(
        (product) => product.id === action.payload.id
      )
      if (itemExist) {
        toast.warning('Item is in cart already')
        return {...state}
      }

      let newItem = state.all_products.find(
        (product) => product.id === action.payload.id
      )

      let item = {
        ...newItem,
        quantity: action.payload.quantity,
        sizes: action.payload.sizes,
        discountedPrice: (newItem.price * (100 - newItem.bonus)) / 100,
      }
      toast.success('New item added to cart')

      return {
        ...state,
        cart: [...state.cart, item],
      }
    case GET_QUANTITY:
      let itemToUpdate = state.cart.find(
        (item) => item.id === action.payload.id
      )

      itemToUpdate.quantity = Number(action.payload.inputVal)

      return { ...state, cart: state.cart }
    case DELETE_CART_ITEM:
      let newCart = state.cart.filter((ca) => ca.id !== action.payload)
      toast.error('item deleted from cart')
      return {
        ...state,
        cart: newCart,
      }

    case COUNT_CART_TOTALS:
      const { total_items, total_amount } = state.cart?.reduce(
        (total, cartItem) => {
          const { quantity, discountedPrice } = cartItem
          total.total_items += quantity
          total.total_amount += discountedPrice * quantity
          return total
        },
        { total_items: 0, total_amount: 0 }
      )

      return { ...state, total_items, total_amount }

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
