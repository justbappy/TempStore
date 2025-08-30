import { createBrowserRouter, RouterProvider, useParams } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import { AppLayout } from './components/layout/AppLayout'
import { fetchGetProducts } from './services/fetchGetProducts'
import { fetchCustomerReviews } from './services/fetchCustomerReview'
import { Product } from './pages/Product'
import { getProductDetails } from './services/api/ApiWork'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Home/>,
          loader: fetchGetProducts,
          hydrateFallbackElement: <h1>Loading...</h1>
        },
        {
          path: '/products',
          element: <Products/>
        },
        {
          path: '/:id',
          element: <Product/>,
          loader: getProductDetails,
          hydrateFallbackElement: <h1>Loading...</h1>
        },
        {
          path: '/about',
          element: <About/>,
          loader: fetchCustomerReviews,
          hydrateFallbackElement: <h1>Loading...</h1>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
      ]
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
