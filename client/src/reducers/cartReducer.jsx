import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_QUANTITY,
  DELETE_CART_ITEM,
  COUNT_CART_TOTALS,
} from '../actions'


const cartReducer = (state, action) => {
  
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, all_products: action.payload }
    case ADD_TO_CART:
      let itemExist = state.cart.some(
        (product) => product.id == action.payload.id
      )
      if (itemExist) {
        return state
      }
      let newItem = state.all_products.find(
        (product) => product.id === +action.payload.id
      )
      newItem.quantity = action.payload.quantity
      newItem.sizes = action.payload.sizes

      return { ...state, cart: [...state.cart, newItem] }
    case GET_QUANTITY:
      let itemToUpdate = state.cart.find(
        (item) => item.id === Number(action.payload.id)
      )
      itemToUpdate.quantity = Number(action.payload.inputVal)

      localStorage.setItem('cart', JSON.stringify(state.cart))

      return { ...state, cart:state.cart }
    case DELETE_CART_ITEM :
       let newCart = state.cart.filter(ca => ca.id !== action.payload)
       console.log(newCart)
       return{...state, cart:newCart}
    case COUNT_CART_TOTALS :
       const {total_items, total_amount} = state.cart.reduce((total, cartItem)=>{
        const {quantity, discountedPrice} = cartItem
        total.total_items += quantity
        total.total_amount += discountedPrice * quantity
        return total
       },{total_items:0, total_amount:0})
      return {...state, total_items, total_amount}
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default cartReducer