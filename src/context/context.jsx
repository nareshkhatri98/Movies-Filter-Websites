// context (warehouse)
// Provider(delivery boy)
// consumer(useContext)


// create context hooks.
import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, message: "" });
  const [query, setQuery] = useState("titanic")

  const getMovies = async (url) => {
    setIsLoading(true); // Reset loading state
    setIsError({ show: false, message: "" }); // Reset error state
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsLoading(false);
        setIsError({ show: true, message: data.Error });
      }
    } catch (err) {
      setIsLoading(false);
      setIsError({ show: true, message: "Something went wrong. Please try again." });
      console.log(err);
    }
  };
  

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);

    },800)
    return () => clearTimeout(timerOut); // clear timeout on unmounting
    
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
