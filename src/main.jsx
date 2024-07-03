import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ConfigProvider } from './utils/context/ConfigProvider'
import { ThemeProvider } from './utils/context/ThemeProvider'
import { Loader } from "./components/Loader"
import { Dashboard } from './routes/Dashboard'
import './root.scss'

const withSuspense = (element) => (
  <Suspense fallback={<Loader />}>
    {element}
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(<Dashboard />),
    errorElement: "not found"
  },
  {
    path: "/javascript",
    element: withSuspense(<Dashboard />),
    errorElement: "not found"
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ConfigProvider>
)
