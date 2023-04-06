import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import ProtectedLayout from './layouts/ProtectedLayout'
import { Contact, Home, About, SingleProduct, Categories } from './pages'
import { createGlobalStyle } from 'styled-components'

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
      { path: '/Contact', element: <Contact /> },
    ],
  },
  {
    path: '/',
    element: <ProtectedLayout/>,
    children:[
      {
        path: '/product/:id',
        element: <SingleProduct />
      },
      {
        path: '/product/category',
        element: <Categories />
      }
    ]
  },
])

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body{
    box-sizing: border-box;
    font-family: 'Arimo' , sans-serif;
  }
  *, 
  *::before, 
  *::after{
    padding: 0;
    margin: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
)
