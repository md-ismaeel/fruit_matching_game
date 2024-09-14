import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import IntroScreen from './Pages/IntroScreen/IntroScreen'
import InstructionScreen from './Pages/InstructionScreen/InstructionScreen'
import ActiveScreen from './Pages/ActiveScreen/ActiveScreen'
import FinalRewordScreen from './Pages/FinalRewordScreen/FinalRewordScreen'

function App() {

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <IntroScreen />,
      errorElement: <NotFound />
    },
    {
      path: "/instruction",
      element: <InstructionScreen />,
      errorElement: <NotFound />
    },
    {
      path: "/active",
      element: <ActiveScreen />,
      errorElement: <NotFound />
    }, {
      path: "/rewords",
      element: <FinalRewordScreen />,
      errorElement: <NotFound />
    }
  ])

  return (
    <RouterProvider router={routers} />
  )
}

export default App
