// context (warehouse)
// Provider(delivery boy)
// consumer(useContext)


// create context hooks.
import React, { useContext, useEffect, useState } from "react";

const API_URL =` http://www.omdbapi.com/?i=tt3896198&apikey=f75fc6b&s=titanic`

const AppContext = React.createContext();
// we need to create provider function..

const AppProvider = ({children}) =>{

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError,setIsError] = useState({show:"false", message: ""});

  const getMovies = async(url) =>{
    try{
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);

      if(data.Response === "True")
      {
         setIsLoading(false);
         setMovie(data.Search);
      }
      else{
        setIsError({
          show:"true",
          message:data.error,
        })

      }
    }catch(err)
    {console.log(err)}

  }

  useEffect(()=>{
    getMovies(API_URL); 
  },[])
  return <AppContext.Provider value={{isLoading, isError,movie}}>
    {children}
  </AppContext.Provider>
} 

// Global custom hook
const useGlobalContext =()=>{
  return useContext(AppContext);
}


export {AppContext,AppProvider, useGlobalContext}