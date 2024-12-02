import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
createBrowserRouter,
RouterProvider,


} from "react-router-dom";
import HomeLayout from './LayOuts/HomeLayout';

const router = createBrowserRouter([
{
  path: "/",
  element: <HomeLayout></HomeLayout>

},

{
  path:"/coupon",
  element:<div>Coupone Layout</div>
},

{

  path:"auth",
  element:<div>Login</div>
},

{
  path:"*",
  element:<h2>Error </h2>
}



]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
