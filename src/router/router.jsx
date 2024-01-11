import React from 'react';


import { createBrowserRouter } from "react-router-dom";
import Mainlayout from '../Layout/Mainlayout';
import Home from '../pages/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout/>,
    children:[
        {
            path:"/",
            element: <Home></Home>
        }
    ]
  },
]);

export default router;