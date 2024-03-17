import { createBrowserRouter } from "react-router-dom"
import Error from "@/error"
import Login from "@/view/login"
import { routes } from "./route"
import Auth from "./auth"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth /> ,
    errorElement: <Error />,
    handle: '',
    children: routes
  },
  {
    path: '/login',
    element: <Login />,
    handle: 'login'
  }
])


export default router