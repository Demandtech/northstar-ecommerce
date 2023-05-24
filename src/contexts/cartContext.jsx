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
const CartContext = createContext()

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
  total_items: 0,
  total_amount: 0,
  all_products: [],
  shipping: 0,
  showSnackbar: {show:false, msg: ''},
}

export const CartProvider = ({ children }) => {
  const [state, dispath] = useReducer(cartReducer, initialState)
  const { products } = useProductsContext()

  // function savedLocalStorage() {
  //   localStorage.setItem('cart', JSON.stringify(state.cart))
  // }

  // console.log(products)

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispath({type: HIDE_SNACKBAR})
    }, 3000)
    
    return () => clearTimeout(setTimeoutId)
  }, [state.showSnackbar.show])

  useEffect(() => {
    dispath({ type: GET_ALL_PRODUCTS, payload: products })
  }, [products])

  const addToCart = (id, sizes, quantity) => {
    console.log(quantity)
    dispath({ type: ADD_TO_CART, payload: { id, sizes, quantity } })
  }

  useEffect(() => {
    dispath({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  const deleteCartItem = (id) => {
    dispath({ type: DELETE_CART_ITEM, payload: id })
  }

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
