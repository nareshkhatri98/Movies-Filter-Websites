import React, { useContext } from 'react'
import { useGlobalContext } from '../context/context'
import Movies from './Movies'
import Search from './Search'


const Home = () => {
    
  return (
    <div>
        <h1>Welcome to home page</h1>
        <Search />
        <Movies />
      
    </div>
  )
}

export default Home