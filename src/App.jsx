import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GlobalStyle } from "./globalStyles"
import Auth from "./pages/Auth"

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth/>
  },
])

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={router}/>
    </>
  )
}