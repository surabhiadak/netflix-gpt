import React from 'react'
import Browse from './Browse'
import Signin from './Signin'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Signin/>
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ])
  return (
      <div>
          <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body