import productsReducer from '../contexts/productsReducer'
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
  cart: getLocalStorage(),
  cart_total: 0,
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

  const addToCart = (id) => {
    dispath({ type: ADD_TO_CART, payload:id })
  }

  useEffect(() => {
    dispath({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <ProductContext.Provider value={{ ...state, addToCart }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
