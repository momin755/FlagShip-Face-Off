import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { Routes } from './Routes/Routes.jsx'
import CartProvider from './providers/CartProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CartProvider>
  <RouterProvider router={Routes}></RouterProvider>
  <Toaster></Toaster>
  </CartProvider>
  </StrictMode>,
)
