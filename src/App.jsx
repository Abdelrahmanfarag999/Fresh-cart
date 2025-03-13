import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import NotFound from './components/Notfound/NotFound';
import AuthContext from './Context/AuthContext';
import Home from './components/Home/Home';
import ProtictedRoute from './components/ProtictedRoute/ProtictedRoute';
import Product from './components/product/Product';
import { QueryClient, QueryClientProvider } from 'react-query';
import Brands from './components/brands/Brands';
import Categories from './components/Categories/Categories';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartContextProvider from './Context/CartContext';
import Cart from './components/Cart/Cart';
import Payment from './components/Payment/Payment';
import Wishlist from './components/Wishlist/Wishlist';
import WishlistContextProvider from './Context/Wishlistcontext';
import ForgetPassword from './components/forgetPassword/ForgetPassword';

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

