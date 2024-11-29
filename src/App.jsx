import React from 'react'
import Home from './components/Home'
import SingleMovie from './components/SingleMovie'
import Error from './components/Error'

import { Route, Routes } from 'react-router-dom'
import "./App.css";

const App = () => {
  return (
   <>
 
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route  path="/movie/:id"  element={<SingleMovie/>}/>
    <Route path='*' element={<Error/>}/>
   </Routes>
   
  
   </>
  )
}

export default App