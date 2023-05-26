import cartReducer from '../reducers/cartReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  GET_ALL_PRODUCTS,
  ADD_TO_CART,
  COUNT_CART_TOTALS,
  DELETE_CART_ITEM,
  HIDE_SNACKBAR,
} from '../actions'
import { useProductsContext } from './productsContext'
import { getFirestore, doc, updateDoc } from 'firebase/firestore'
import { useUserContext } from './userContext'
const CartContext = createContext()

const db = getFirestore()



const initialState = {
  cart: [],
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

  const userId = user.id

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
  
    dispath({ type: ADD_TO_CART, payload: { id, sizes, quantity } })
  }

  const addCartBd = (cartItem) => {
    const userRef = doc(db, 'users', userId)
    updateDoc(userRef, { cart: [...cart, cartItem] })
  }

  useEffect(() => {
    dispath({ type: COUNT_CART_TOTALS }) 
   
  }, [state.cart])

  const deleteCartItem = (id) => {
    dispath({ type: DELETE_CART_ITEM, payload: id })
  }

 

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, dispath, deleteCartItem}}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  return useContext(CartContext)
}
