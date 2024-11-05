import React, { createElement } from 'react' 
import './App.css'
import Navbar from './layout/Navbar'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'

function App() { 
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Rootlayout/>}>
        <Route path='/' element={<Home/>}></Route>
      </Route>
    </Route>
  )
)
  return (
    <RouterProvider router={router}>
         
    </RouterProvider>
  )
}

export default App
