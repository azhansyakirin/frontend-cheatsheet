import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './utils/context/ThemeProvider'
import { ConfigProvider } from './utils/context/ConfigProvider'
import { Loader } from "./components/Loader"
import { Dashboard } from './routes/Dashboard'
import { NotFound } from './routes/NotFound'
import { Javascript } from './routes/Javascript'
import { ComingSoon } from './routes/ComingSoon'
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
    errorElement: <NotFound />
  },
  {
    path: "/javascript",
    element: withSuspense(<Javascript
    pageName="JavaScript"
    pageDescription="This is a Javascript basic cheatsheet for developer reference."
    />),
    errorElement: <NotFound />
  },
  {
    path: "/react-js",
    element: withSuspense(<ComingSoon/>),
    errorElement: <NotFound />
  },
  {
    path: "/html",
    element: withSuspense(<ComingSoon/>),
    errorElement: <NotFound />
  },
  {
    path: "/css",
    element: withSuspense(<ComingSoon/>),
    errorElement: <NotFound />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </ConfigProvider>
)
