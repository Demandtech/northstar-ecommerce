import productsReducer from '../reducers/productsReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  GET_ALL_PRODUCTS,
  GET_DISCOUNTED_PRICE,
  GET_CATEGORY,
} from '../actions'
import { products } from '../utils/datas'

const ProductContext = createContext()

const initialState = {
  products: [],
  males: [],
  females: [],
  singleProduct: {},
  category:{ name: '', products:[] },
}

export const ProductProvider = ({ children }) => {
  const [state, dispath] = useReducer(productsReducer, initialState)

  useEffect(() => {
    dispath({ type: GET_ALL_PRODUCTS, payload: products })
  }, [])

  useEffect(() => {
    dispath({ type: GET_DISCOUNTED_PRICE, payload: products })
  }, [])

  const getCategory = (sex)=> {
    dispath({ type: GET_CATEGORY, payload: sex })
  }

  return (
    <ProductContext.Provider value={{ ...state, getCategory }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
