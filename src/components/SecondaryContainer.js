import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => 
  {
    const movies=useSelector((store)=>store.movies);
    console.log(movies);

  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Crime shows"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror movies"} movies={movies.nowPlayingMovies}/> 
      <MovieList title={"Romantic movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Total movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>  
    </div>
  )
}

export default SecondaryContainer;