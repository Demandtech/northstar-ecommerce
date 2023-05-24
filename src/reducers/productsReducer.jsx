import {
  GET_ALL_PRODUCTS,
  GET_DISCOUNTED_PRICE,
  GET_CATEGORY,
  GET_FOUNDERS,
  GET_TESTIMONIES,
  GET_TOPSELLERS,
  START_LOADING,
  STOP_LOADING
} from '../actions'

const productsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      let females = action.payload.filter(
        (product) => product.type === 'female'
      )
      let males = action.payload.filter((product) => product.type === 'male')

      return { ...state, products: action.payload, males, females }
    case GET_DISCOUNTED_PRICE:
      let tempProduct = state.products.map((product) => {
        return {
          ...product,
          discountedPrice:
            product.price - product.price * (product.bonus / 100),
        }
      })
      return { ...state, products: tempProduct }
    case GET_CATEGORY:
      return {
        ...state,
        category: {
          categoryName: action.payload.querystr,
          categoryProducts: action.payload.catProducts,
        },
      }
    case GET_FOUNDERS:
      return { ...state, founders: action.payload }
    case GET_TESTIMONIES:
      return { ...state, testimonies: action.payload }
    case GET_TOPSELLERS:
      const topseller = state.products.filter(
        (product) => product.topseller === true
      )
      return { ...state, topseller }
    case START_LOADING:
      return { ...state, loading: true }
    case STOP_LOADING:
      return { ...state, loading: false }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
