import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginForm from './pages/login/Login.tsx';
import './index.css';

const router = createBrowserRouter([
  {path: '/', element: <LoginForm />}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
