import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'

const Router = () => {
  const router = createBrowserRouter(routes)

  return <RouterProvider router={router} future={{ v7_startTransition: true }} />
}

export default Router
