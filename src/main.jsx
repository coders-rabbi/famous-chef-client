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
        element: <BLog></BLog>
      },
      {
        path:"/recipesDetails/:recipesId",
        element: <RecipeDetails></RecipeDetails>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
