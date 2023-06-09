import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './components/Route/Route.jsx';
import Home from './components/Home/Home.jsx';
import Registration from './components/Registration/Registration.jsx';
import Login from './components/Login/Login.jsx';
import BLog from './components/Blog/BLog.jsx';
import RecipeDetails from './components/RecipeDetails/RecipeDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './components/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <PrivateRoute>
          <BLog></BLog>
        </PrivateRoute>
      },
      {
        path:"/recipesDetails/:recipesId",
        element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
