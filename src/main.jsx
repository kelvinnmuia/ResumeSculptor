import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import { RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {

      }
    ]
  },
  {
    path:'/auth/sign-in',
    element:<SignInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
