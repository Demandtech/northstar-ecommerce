import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider } from 'react-router-dom'
import { ProductProvider } from './contexts/productsContext'
import { CartProvider } from './contexts/cartContext'
import { UserProvider } from './contexts/userContext'
// import router from './router'
import router from './router'
import {GlobalStyle, Snackbar} from './components'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
          <Snackbar />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
)
