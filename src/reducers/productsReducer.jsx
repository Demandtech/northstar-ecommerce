import {
  GET_ALL_PRODUCTS,
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
    case 'GET_DISCOUNTED_PRICE':
      let tempProduct = state.products.map((product) => {
       return {...product, discountedPrice: product.price - product.price * (product.bonus / 100)}
      })
      return {...state, products:tempProduct}
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
