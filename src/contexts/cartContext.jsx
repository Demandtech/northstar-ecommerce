import cartReducer from '../reducers/cartReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import { useProductsContext } from './productsContext'
import { useUserContext } from './userContext'
import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  DELETE_CART_ITEM,
  HIDE_SNACKBAR,
} from '../actions'
import {
  getFirestore,
  doc,
  updateDoc,
  onSnapshot,
  getDoc,
} from 'firebase/firestore'

const CartContext = createContext()

const db = getFirestore()

const getCartFromLocalStorage = ()=>{
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
  showSnackbar: { show: false, msg: '' },
}

export const CartProvider = ({ children }) => {
  const [state, dispath] = useReducer(cartReducer, initialState)
  const { products } = useProductsContext()
  const { user } = useUserContext()

  const userId = user?.id

  useEffect(() => {
    if (userId) {
      const userRef = doc(db, 'users', userId)
      onSnapshot(userRef, (snapshot) => {
        const cartData = snapshot.data().cart
        dispath({ type: 'GET_CART', payload: cartData })
      })    
    }
  }, [userId])

  const updateCartDb = () => {
    if (userId) {
      const userRef = doc(db, 'users', userId)
      const updatedCart = [...state.cart]
      updateDoc(userRef, { cart: updatedCart })
      localStorage.removeItem('cart')
    }
  }

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispath({ type: HIDE_SNACKBAR })
    }, 3000)

    return () => clearTimeout(setTimeoutId)
  }, [state.showSnackbar.show])

  useEffect(() => {
    dispath({ type: GET_ALL_PRODUCTS, payload: products })
  }, [products])

  const addToCart = (id, sizes, quantity) => {
    updateCartDb()

    dispath({ type: ADD_TO_CART, payload: { id, sizes, quantity } })
  }

  useEffect(() => {
    dispath({ type: COUNT_CART_TOTALS })
  }, [state.cart])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },[state.cart])

  const deleteCartItem = (id) => {
    if (userId) {
      const userRef = doc(db, 'users', userId)
      getDoc(userRef).then((snapshot) => {
        const userData = snapshot.data()

        const updatedCart = userData.cart.filter((item) => item.id !== id)

        updateDoc(userRef, { cart: updatedCart })
      })
    }
    dispath({ type: DELETE_CART_ITEM, payload: id })
  }

  useEffect(() => {
    if (state.cart.length > 0) {
      updateCartDb()
    }
  }, [state.cart])

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, dispath, deleteCartItem }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
