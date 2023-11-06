import {
  GET_ALL_PRODUCTS,
  GET_CATEGORY,
  GET_FOUNDERS,
  GET_TESTIMONIES,
  GET_TOPSELLERS,
  START_LOADING,
  STOP_LOADING,
  GET_SINGLE_PRODUCT,
} from '../actions'

const productsReducer = (state, action) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, loading: true }
    case STOP_LOADING:
      return { ...state, loading: false }
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.payload }
    case GET_CATEGORY:
      return { ...state, category: action.payload }
    case GET_FOUNDERS:
      return { ...state, founders: action.payload }
    case GET_TESTIMONIES:
      return { ...state, testimonies: action.payload }
    case GET_TOPSELLERS:
      return { ...state, topseller: action.payload }
    case GET_SINGLE_PRODUCT:
      return { ...state, single_product: action.payload }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
