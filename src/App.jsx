import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './commponants/Layout/Layout'
import Register from './commponants/Register/Register'
import Login from './commponants/Login/Login'
import NotFound from './commponants/Notfound/NotFound'
import AuthContext from './Context/AuthContext'
import Home from './commponants/Home/Home'
import ProtictedRoute from './commponants/ProtictedRoute/ProtictedRoute'
import Product from './commponants/product/Product'
import { QueryClient, QueryClientProvider } from 'react-query'
import Brands from './commponants/brands/Brands'
import Categories from './commponants/Categories/Categories'
import ProductDetails from './commponants/productDetails/productDetails'
import CartContextProvider from './Context/CartContext'
import Cart from './commponants/Cart/Cart'
import Payment from './commponants/Payment/Payment'
import Wishlist from './commponants/Wishlist/Wishlist'
import WishlistContextProvider from './Context/WishlistContext'
import ForgetPassword from './commponants/forgetPassword/ForgetPassword'
const router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      {
        path: 'home', element: <ProtictedRoute>
          <Home /> </ProtictedRoute>
      },
      {
        path: 'brands', element: <ProtictedRoute>
          < Brands /> </ProtictedRoute>
      },
      {
        path: 'cart', element: <ProtictedRoute>
          < Cart /> </ProtictedRoute>
      },
      {
        path: 'Categories', element: <ProtictedRoute>
          <Categories /> </ProtictedRoute>
      },
      {
        path: 'payment', element: <ProtictedRoute>
          <Payment /> </ProtictedRoute>
      },
      {
        path: 'forgetpassword', element: 
          <ForgetPassword />
      },
      {
        path: 'productDetails/:id', element: <ProtictedRoute>
          < ProductDetails /> </ProtictedRoute>
      },
      {
        path: 'product', element: <ProtictedRoute>
          <Product /> </ProtictedRoute>
      },
      {
        path: 'wishlist', element: <ProtictedRoute>
          <Wishlist /> </ProtictedRoute>
      },
      { path: '*', element: <NotFound /> }
    ]
  }
])

const queryConfig = new QueryClient()
export default function App() {
  return (
    <>
      <AuthContext>
        <QueryClientProvider client={queryConfig}>
  <WishlistContextProvider>
          <CartContextProvider>


          

              <RouterProvider router={router} />



          </CartContextProvider>
      </WishlistContextProvider>





        </QueryClientProvider>
      </AuthContext>


    </>
  )
}

