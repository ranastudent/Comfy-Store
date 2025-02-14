import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProducts } from './pages'
import { ErrorElement } from './componets'
//loader
import {loader as landingLoader} from "./pages/Landing"
//actions

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing/>,
        errorElement:<ErrorElement/>,
        loader: landingLoader
      },
      {
        path:"products",
        element:<Products/>,
      },
      {
        path:"products/:id",
        element:<SingleProducts/>,
      },
      {
        path:"cart",
        element:<Cart/>,
      },
      {
        path:"about",
        element:<About/>,
      },
      {
        path:"checkout",
        element:<Checkout/>,
      },
      {
        path:"orders",
        element:<Orders/>,
      },
    ]
  },
  {
    path: "/login",
    element:<Login/>,
    errorElement:<Error/>
  },
  {
    path: "/register",
    element:<Register/>,
    errorElement:<Error/>
  },
])

function App() {
  
  return <RouterProvider router={router}></RouterProvider>
}

export default App
