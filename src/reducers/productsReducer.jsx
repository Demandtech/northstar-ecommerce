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
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
