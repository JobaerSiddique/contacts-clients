import React from 'react'
import ReactDOM from 'react-dom/client'

import {  HelmetProvider } from 'react-helmet-async';
import './index.css'
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Routes/Router.jsx'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider >
     <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}>
  </RouterProvider>
  </QueryClientProvider>
  </HelmetProvider>
)
