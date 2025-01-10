import { createRoot } from 'react-dom/client'
import './index.css'
import { appRouter } from './App.jsx'
import {RouterProvider } from 'react-router'


createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <App/>
  // </BrowserRouter>
  
  <RouterProvider router = {appRouter}/>
  
)
