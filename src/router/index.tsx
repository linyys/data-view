import { createBrowserRouter } from "react-router-dom"
import Error from "@/error"
import Login from "@/view/login"
import Layout from "@/layout"
import { routes } from "./route"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: routes
  },
  {
    path: '/login',
    element: <Login />,
    handle: 'login'
  }
])


export default router