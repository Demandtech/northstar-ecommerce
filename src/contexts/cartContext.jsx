import axios from 'axios'
import cartReducer from '../reducers/cartReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { useUserContext } from './userContext'
import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  START_LOADING,
  STOP_LOADING,
  GET_CART,
} from '../actions'

const CartContext = createContext()

const initialState = {
  cart: [],
  newCartItem: {},
  total_items: 0,
  total_amount: 0,
  all_products: [],
  shipping: 0,
  orders: [],
  loading: false,
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const { user } = useUserContext()

  const baseUrl = `${import.meta.env.VITE_APP_BASE_URL}/users/me/cart`
  const token = localStorage.getItem('token')

  const getAllCart = async () => {
    if (token) {
      try {
        const { data, status } = await axios.get(`${baseUrl}/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        
        if (status === 200) {
          dispatch({ type: GET_CART, payload: data })
        }
      } catch (err) {
        console.log(err)
      }
    }
  }

  const addToCart = async (payload) => {
    dispatch({ type: START_LOADING })

    if (token) {
      try {
        const { data, status } = await axios.post(`${baseUrl}/`, payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (status === 201) {
          dispatch({ type: ADD_TO_CART, payload: data })
          dispatch({ type: STOP_LOADING })
          getAllCart()
        }
      } catch (err) {
        console.log(err)
        dispatch({ type: STOP_LOADING })
      }
    }
  }

  const deleteCartItem = async (id) => {
    try {
      const { status } = await axios.delete(`${baseUrl}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (status === 204) {
        dispatch({ type: DELETE_CART_ITEM })
        getAllCart()
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllCart()
  }, [user])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, dispatch, deleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
