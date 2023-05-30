import productsReducer from '../reducers/productsReducer'
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import {
  GET_ALL_PRODUCTS,
  GET_DISCOUNTED_PRICE,
  GET_CATEGORY,
  GET_TESTIMONIES,
  GET_FOUNDERS,
  GET_TOPSELLERS,
  START_LOADING,
  STOP_LOADING,
  GET_SINGLE_PRODUCT,
  SET_CATESTR,
} from '../actions'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  getDoc,
  doc,
} from 'firebase/firestore'

const apikey = import.meta.env.VITE_APP_API_KEY
const authDomain = import.meta.env.VITE_APP_AUTH_DOMAIN
const projectId = import.meta.env.VITE_APP_PROJECT_ID
const storageBucket = import.meta.env.VITE_APP_MESSENGE_SENDER_ID
const messagingSenderId = import.meta.env.VITE_APP_STORAGE_BUCKET
const appId = import.meta.env.VITE_APP_ID

const firebaseConfig = {
  apiKey: apikey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
}

//Initialize database
initializeApp(firebaseConfig)

//Initialize services
const db = getFirestore()

//collection refs
const foundersColRef = collection(db, 'founder')
const testimonialsColRef = collection(db, 'testimonials')
const productsColRef = collection(db, 'products')

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
  founders: [],
  testimonies: [],
  males: [],
  females: [],
  singleProduct: {},
  topseller: [],
  category: [],
  categoryStr: getLocalStorage(),
}

export const ProductProvider = ({ children }) => {
  const [state, dispath] = useReducer(productsReducer, initialState)

  useEffect(() => {
    dispath({ type: GET_DISCOUNTED_PRICE })
  }, [])

  useEffect(() => {
    dispath({ type: GET_TOPSELLERS })
  }, [state.products])

  const fetchApi = (apicolRef, action) => {
    dispath({ type: START_LOADING })
    getDocs(apicolRef)
      .then((snapshot) => {
        let result = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
        dispath({ type: action, payload: result })
        dispath({ type: STOP_LOADING })
      })
      .catch((err) => {
        dispath({ type: START_LOADING })
        console.log(err)
      })
  }

  const getCategory = (querystr) => {
    dispath({ type: START_LOADING })
    const productsCol = collection(db, 'products')
    getDocs(query(productsCol, where('type', '==', querystr)))
      .then((snapshot) => {
        let result = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
        dispath({ type: STOP_LOADING })
        dispath({ type: GET_CATEGORY, payload: result })
      })
      .catch(() => {
        dispath({ type: STOP_LOADING })
      })
  }

  const getSingleProduct = (id) => {
    dispath({ type: START_LOADING })
    const singleProductRef = doc(db, 'products', id)
    getDoc(singleProductRef)
      .then((res) => {
        dispath({
          type: GET_SINGLE_PRODUCT,
          payload: { product: res.data(), singleId: id },
        })
        dispath({ type: STOP_LOADING })
      })
      .catch((err) => {
        dispath({ type: STOP_LOADING })
        console.log(err)
      })
  }

  useEffect(() => {
    fetchApi(foundersColRef, GET_FOUNDERS)
    fetchApi(testimonialsColRef, GET_TESTIMONIES)
    fetchApi(productsColRef, GET_ALL_PRODUCTS)
  }, [])

  return (
    <ProductContext.Provider
      value={{ ...state, getCategory, getSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
