import React from 'react'
import { useGlobalContext } from '../context/context'

const Search = () => {
  const {query,setQuery, isError} = useGlobalContext();
  return (
    <>
    <section className='search-section'>
      <h1> Search your Favorite Movies </h1>
      <form action="#" onSubmit={(e)=> e.preventDefault()}>
        <div>
          <input type="text" placeholder='Search here'  onChange={(e)=>setQuery(e.target.value)} />
        </div>
      </form>
      <div className='card-error'>
        <p>{isError.show && isError.message}</p>
      </div>
      </section>

    </>
  )
}

export default Search