import React, { useContext } from 'react'
import { useGlobalContext } from '../context/context'
import Movies from './Movies'
import Search from './Search'


const Home = () => {
    
  return (
    <div>
       
        <Search />
        <Movies />
      
    </div>
  )
}

export default Home