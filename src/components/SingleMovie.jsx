import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
  const {id} = useParams();
  return (
    <div>
      
      Welcome to Single move {id}
    </div>
  )
}

export default SingleMovie