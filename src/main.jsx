import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
createBrowserRouter,
RouterProvider,


} from "react-router-dom";
import HomeLayout from './LayOuts/HomeLayout';
import BandsDetails from './Pages/BandsDetails';
import OnSell from './Components/OnSell';

const router = createBrowserRouter([
{
  path: "/",
  element: <HomeLayout></HomeLayout>,
  

},

{
  path:"/brand/:id",
  element:<BandsDetails></BandsDetails>,
  loader:({ params }) => fetch(`topBrands.json`)
  .then(res => res.json())
  .then(data => data.find(brand => brand._id === params.id))

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
