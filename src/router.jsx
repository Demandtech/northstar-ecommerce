import { createBrowserRouter} from 'react-router-dom'
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
  Register,
  UserProfile,
  Order,
} from './pages'

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
        path: '/products/:type',
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
      {
        path: '/profile',
        element: <UserProfile />,
      },
      {
        path:'/order',
        element: <Order />
      }
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

export default router