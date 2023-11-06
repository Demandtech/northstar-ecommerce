import { createBrowserRouter } from 'react-router-dom'
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
  SignUp,
  UserProfile,
  Order,
  Error,
  ChangePassword,
  ForgotPassword,
  Login,
  Verify,
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
        path: '/order',
        element: <Order />,
      },
    ],
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/auth/signup',
        element: <SignUp />,
      },
      {
        path: 'auth/login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Error />,
      },
      {
        path: '/forgot_password',
        element: <ForgotPassword />,
      },
      {
        path: '/change_password/:token',
        element: <ChangePassword />,
      },
      {
        path: '/verify/:token',
        element: <Verify />,
      },
    ],
  },
])

export default router
