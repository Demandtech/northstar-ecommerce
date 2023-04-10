import productsReducer from '../reducers/productsReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  GET_SINGLE_PRODUCT,
  COUNT_CART_TOTALS,
} from '../actions'
import { products } from '../utils/datas'

const ProductContext = createContext()

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if (cart) {
    try {
      return JSON.parse(cart)
    } catch (err) {
      console.log(err)
      localStorage.removeItem('cart')
      return []
    }
  } else {
    return []
  }
}

const initialState = {
  products: [],
  males: [],
  females: [],
  singleProduct: {},
}

export const ProductProvider = ({ children }) => {
  const [state, dispath] = useReducer(productsReducer, initialState)

  useEffect(() => {
    dispath({ type: GET_ALL_PRODUCTS, payload: products })
  }, [])

  // const addToCart = (id, sizes, quantity) => {
  //   dispath({ type: ADD_TO_CART, payload: { id, sizes, quantity } })
  // }

  // useEffect(() => {
  //   dispath({ type: COUNT_CART_TOTALS })
  //   localStorage.setItem('cart', JSON.stringify(state.cart))
  // }, [state.cart])

  return (
    <ProductContext.Provider value={{ ...state}}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
