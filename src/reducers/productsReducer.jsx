import {
  GET_ALL_PRODUCTS,
  GET_DISCOUNTED_PRICE,
  GET_CATEGORY,
  GET_FOUNDERS,
  GET_TESTIMONIES,
  GET_TOPSELLERS,
  START_LOADING,
  STOP_LOADING,
  GET_SINGLE_PRODUCT,
  SET_CATESTR
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
      const category = state.products.filter(
        (product) => product.type === state.categoryStr
      )

      console.log(category)
      return { ...state, category}
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
    case GET_SINGLE_PRODUCT:
      const singleProduct = {
        ...action.payload.product,
        id: action.payload.singleId,
      }

      return { ...state, singleProduct }
    case SET_CATESTR:
       return { ...state, categoryStr:action.payload }
    default:
      throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default productsReducer
