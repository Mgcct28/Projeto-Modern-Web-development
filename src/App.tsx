
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import LoginPage from './pages/Login'
import UserPage from './pages/User'
import HomePage from './pages/Home'
import EditUserPage from './pages/User/edit'

import './App.scss'


const router= createBrowserRouter ([

  { path: '/', Component: LoginPage},
  { path: '/login', Component: LoginPage},
  { path: '/home', Component: HomePage},
  { path: '/user/create', Component: UserPage},
  { path: '/user/:id/edit', Component: EditUserPage},
  


])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
