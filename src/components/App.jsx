import Body from './Body.jsx'
import Header from './Header.jsx'
import { lazy, Suspense, useEffect, useState } from 'react'
import { createBrowserRouter, Outlet } from 'react-router'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Error from './Error.jsx'
import RestaurentMenu from './RestaurentMenu.jsx'
import Mind from './Mind.jsx'
import Usercontext from '../utils/Usercontext.jsx'
import { Provider } from 'react-redux'
const Grocery = lazy(() => import("./Grocery.jsx"))
import appStore from '../utils/appStore.jsx'
import Cart from './Cart.jsx'
export function App() {
  const [userName, setUserName] = useState("");
  // useEffect(()=>{
  //   const data = {
  //     name : "Kavi",
  //   }
  //   setUserName(data.name)
  // },[])
  return (
    <>
      <Provider store = {appStore}>
        <Usercontext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />

        </Usercontext.Provider>

      </Provider>




    </>
  )
}
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,   //Children of APP 
    children: [
      {
        path: "/",
        element: <Body />

      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurents/:resid",
        element: <RestaurentMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: "/mind/:id",
        element: <Mind />
      },
      {
        path : "/cart",
        element : <Cart/>
      }

    ],
    errorElement: <Error />

  }
])


