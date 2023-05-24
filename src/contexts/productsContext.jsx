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

const firebaseConfig = {
  apiKey: 'AIzaSyCXAbGsX3-J_8s_jTJ9MNjIa-VP0vXCgPY',
  authDomain: 'northstar-213d4.firebaseapp.com',
  projectId: 'northstar-213d4',
  storageBucket: 'northstar-213d4.appspot.com',
  messagingSenderId: '736872699713',
  appId: '1:736872699713:web:a29f9ae82161784b2033c0',
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

  const setCatStr = (str) => {
    localStorage.setItem('str', str)
    dispath({ type: SET_CATESTR, payload: str })
  }

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
    localStorage.setItem('str', querystr)

    dispath({ type: GET_CATEGORY, payload: querystr })

    dispath({ type: STOP_LOADING })

    console.log(querystr)
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
      value={{ ...state, getCategory, getSingleProduct, setCatStr }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
