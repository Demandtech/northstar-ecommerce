import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ProductProvider } from './contexts/productsContext'
import { CartProvider } from './contexts/cartContext'
import { UserProvider } from './contexts/userContext'
import router from './router'
import { GlobalStyle } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ChakraProvider } from '@chakra-ui/react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
          <ToastContainer position='top-right'  autoClose={1500} />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </ChakraProvider>
)
