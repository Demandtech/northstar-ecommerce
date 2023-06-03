import cartReducer from '../reducers/cartReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductsContext } from './productsContext'
import { useUserContext } from './userContext'
import { Loader } from '../components'
import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  DELETE_CART_ITEM,
  HIDE_SNACKBAR,
  START_LOADING,
  STOP_LOADING,
  GET_ORDER,
  GET_CART,
} from '../actions'
import {
  getFirestore,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
  connectFirestoreEmulator,
} from 'firebase/firestore'

const CartContext = createContext()

const db = getFirestore()

const getCartFromLocalStorage = () => {
  const cartData = localStorage.getItem('cart')

  return cartData ? JSON.parse(cartData) : []
}

const initialState = {
  cart: getCartFromLocalStorage(),
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
  const { products } = useProductsContext()
  const { user } = useUserContext()

  const userId = user?.id

  useEffect(() => {
    if (userId) {
      const userRef = doc(db, 'users', userId)
      onSnapshot(userRef, (snapshot) => {
        const cartData = snapshot.data().cart
        dispatch({ type: GET_CART, payload: cartData })
      })
    }
  }, [userId])

  

  const updateCartDb = () => {
    if (userId) {
      const userRef = doc(db, 'users', userId)
      const updatedCart = [...state.cart]
      updateDoc(userRef, { cart: updatedCart })
    }
  }

  const fetchOrders = () => {
    dispatch({ type: START_LOADING })
    if (userId) {
      const userRef = doc(db, 'users', userId)
      onSnapshot(userRef, (snapshot) => {
        const orderData = snapshot.data().order
        dispatch({ type: GET_ORDER, payload: orderData })
        dispatch({ type: STOP_LOADING })
      })
    }
  }

 

  useEffect(() => {
    dispatch({ type: GET_ALL_PRODUCTS, payload: products })
  }, [products])

  const addToCart = (id, sizes, quantity) => {
    updateCartDb()

    dispatch({ type: ADD_TO_CART, payload: { id, sizes, quantity } })
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  const deleteCartItem = (id) => {
    if (userId) {
      const userRef = doc(db, 'users', userId)
      getDoc(userRef).then((snapshot) => {
        const userData = snapshot.data()

        const updatedCart = userData.cart.filter((item) => item.id !== id)

        updateDoc(userRef, { cart: updatedCart })
      })
    }
    dispatch({ type: DELETE_CART_ITEM, payload: id })
  }

  useEffect(() => {
    if (state.cart.length > 0) {
      updateCartDb()
    }
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, dispatch, deleteCartItem, fetchOrders }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
