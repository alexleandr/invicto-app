import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { GlobalStyle } from "./globalStyles"
import { Auth } from "./pages/Auth"

const router = createBrowserRouter([
  {
    path: '/auth/:idForm',
    element: <Auth />
  },
])

export function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  )
}