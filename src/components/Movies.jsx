import React from 'react';
import { useGlobalContext } from '../context/context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie } = useGlobalContext();

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie && movie.length > 0 ? (
            movie.map((currMovie) => {
              const { imdbID, Title, Poster } = currMovie;
              const movieName = Title.length > 15 ? `${Title.substring(0, 15)}...` : Title;

              return (
                <NavLink to={`/movie/${imdbID}`} key={imdbID}>
                  <div className="card">
                    <div className="card-info">
                      <h2>{movieName}</h2>
                      <img src={Poster} alt={`Poster of ${Title}`} />
                    </div>
                  </div>
                </NavLink>
              );
            })
          ) : (
            <p style={{ display:'none' }}>No movies available. Please try again later.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Movies;
