import productsReducer from '../reducers/productsReducer'
import { createContext, useContext, useEffect, useReducer } from 'react'
import {
  GET_ALL_PRODUCTS,
  GET_DISCOUNTED_PRICE,
  GET_CATEGORY,
  GET_TESTIMONIES,
  GET_FOUNDERS,
  GET_TOPSELLERS,
  START_LOADING,
  STOP_LOADING
} from '../actions'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
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

const initialState = {
  loading: false,
  products: [],
  founders: [],
  testimonies: [],
  males: [],
  females: [],
  singleProduct: {},
  topseller: [],
  category: { categoryName: '', categoryProducts: [] },
}

export const ProductProvider = ({ children }) => {
  const [state, dispath] = useReducer(productsReducer, initialState)

  useEffect(() => {
    dispath({ type: GET_DISCOUNTED_PRICE })
  }, [])

  useEffect(() => {
    dispath({ type: GET_TOPSELLERS })
  }, [state.products])

  // const getCategory = (type) => {
  //   dispath({ type: GET_CATEGORY, payload: type })
  // }

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
    const queryProducts = query(productsColRef, where('type', '==', querystr))

    getDocs(queryProducts)
      .then((snapshot) => {
        let catProducts = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
        dispath({ type: GET_CATEGORY, payload: { querystr, catProducts } })

        dispath({ type: STOP_LOADING })
        console.log('called')
        console.log(catProducts)
        return catProducts
      })
      .catch((err) => console.log(err))
  }

  // useEffect(()=>{

  //   getCategory('female')
  // }, [])

  useEffect(() => {
    fetchApi(foundersColRef, GET_FOUNDERS)
    fetchApi(testimonialsColRef, GET_TESTIMONIES)
    fetchApi(productsColRef, GET_ALL_PRODUCTS)
  }, [])

  return (
    <ProductContext.Provider value={{ ...state, getCategory }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductsContext = () => {
  return useContext(ProductContext)
}
