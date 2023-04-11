import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import GuestLayout from './layouts/GuestLayout'
import {
  Contact,
  Home,
  About,
  SingleProduct,
  Categories,
  CartIems,
  Checkout,
  Login,
  Register
} from './pages'
import { createGlobalStyle } from 'styled-components'
import { ProductProvider } from './contexts/productsContext'
import { CartProvider } from './contexts/cartContext'
import { UserProvider } from './contexts/userContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      { path: '/contact', element: <Contact /> },
      {
        path: '/product/:id',
        element: <SingleProduct />,
      },
      {
        path: '/product/category',
        element: <Categories />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [
      {
        path: '/cart',
        element: <CartIems />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
])

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body{
    
    font-family: 'Arimo' , sans-serif;
  }
  *, 
  *::before, 
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <GlobalStyle />
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
)
