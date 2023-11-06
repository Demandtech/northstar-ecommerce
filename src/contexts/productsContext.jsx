import axios from 'axios'
import productsReducer from '../reducers/productsReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  GET_ALL_PRODUCTS,
  GET_CATEGORY,
  GET_TESTIMONIES,
  GET_FOUNDERS,
  GET_TOPSELLERS,
  START_LOADING,
  STOP_LOADING,
  GET_SINGLE_PRODUCT,
} from '../actions'

const ProductContext = createContext()

const getLocalStorage = () => {
  let catstr = localStorage.getItem('str')
  if (catstr) {
    try {
      return catstr
    } catch (err) {
      console.log(err)
      localStorage.removeItem('str')
      return []
    }
  } else {
    return ''
  }
}

const initialState = {
  loading: false,
  products: [],
  single_product: {},
  founders: [],
  testimonies: [],
  males: [],
  females: [],
  topseller: [],
  category: [],
  categoryStr: getLocalStorage(),
}

export const ProductProvider = ({ children }) => {
  const [state, dispath] = useReducer(productsReducer, initialState)
  const baseUrl = `${import.meta.env.VITE_APP_BASE_URL}/products`

  const getAllProducts = async () => {
    dispath({ type: START_LOADING })
    try {
      const { data, status } = await axios.get(baseUrl)

      if (status === 200) {
        dispath({ type: STOP_LOADING })
        dispath({ type: GET_ALL_PRODUCTS, payload: data })
      }
    } catch (err) {
      dispath({ type: STOP_LOADING })
    }
  }

  const getCategory = async (querystr) => {
    dispath({ type: START_LOADING })

    try {
      const { data, status } = await axios.get(`${baseUrl}/type/${querystr}`)

      if (status === 200) {
        dispath({ type: STOP_LOADING })
        dispath({ type: GET_CATEGORY, payload: data })
      }
    } catch (err) {
      dispath({ type: STOP_LOADING })
      console.log(err)
    }
  }

  const getSingleProduct = async (id) => {
    dispath({ type: START_LOADING })

    try {
      const { data, status } = await axios.get(`${baseUrl}/${id}`)

      if (status === 200) {
        dispath({ type: STOP_LOADING })
        dispath({
          type: GET_SINGLE_PRODUCT,
          payload: data,
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getTopsellersProducts = async () => {
    dispath({ type: START_LOADING })
    try {
      const { data, status } = await axios.get(`${baseUrl}/topsellers`)
      if (status === 200) {
        dispath({ type: STOP_LOADING })
        dispath({ type: GET_TOPSELLERS, payload: data })
      }
    } catch (err) {
      dispath({ type: STOP_LOADING })
      console.log(err)
    }
  }

  const getFounders = async () => {
    dispath({ type: START_LOADING })
    try {
      const { data, status } = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/founders`
      )
      if (status === 200) {
        dispath({ type: STOP_LOADING })
        dispath({ type: GET_FOUNDERS, payload: data })
      }
    } catch (err) {
      dispath({ type: STOP_LOADING })
      console.log(err)
    }
  }

  const getTestimonials = async () => {
    dispath({ type: START_LOADING })
    try {
      const { data, status } = await axios.get(
        `${import.meta.env.VITE_APP_BASE_URL}/testimony`
      )
      if (status === 200) {
        dispath({ type: STOP_LOADING })
        dispath({ type: GET_TESTIMONIES, payload: data })
      }
    } catch (err) {
      dispath({ type: STOP_LOADING })
      console.log(err)
    }
  }

  useEffect(() => {
    getAllProducts()
    getTopsellersProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        ...state,
        getCategory,
        getSingleProduct,
        getFounders,
        getTestimonials,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
