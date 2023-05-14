import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home.jsx'
import Blog from './component/Blog.jsx'
import ErrorPage from './component/ErrorPage.jsx'
import Login from './component/Login.jsx'
import Registration from './component/Registration.jsx'
import AuthProvider from './component/AuthProvider.jsx'
import ChefRecipeItems from './component/ChefRecipeItems.jsx'
import PrivateRoute from './component/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/chef-recipe/:id',
        element: <PrivateRoute><ChefRecipeItems></ChefRecipeItems></PrivateRoute>,
        loader: ({ params }) => fetch(`https://foodpanda-seven.vercel.app/chef/${params.id}`)
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
