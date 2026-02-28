import React from 'react'
import { baseImageUrl } from '../utils/constants';
const MovieCard = ({movie}) => {
    
  return (
    <div className="w-48" >
        <img src={baseImageUrl + movie?.poster_path} alt={movie?.title}/>
    </div>
  )
}

export default MovieCard