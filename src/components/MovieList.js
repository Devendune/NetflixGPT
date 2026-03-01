import React from 'react'
import MovieCard from './MovieCard';
const MovieList = ({title,movies})=>{
    
    
  return (
    <div>
        <div className="">
            <h1 className="text-black text-3xl">{title}</h1>
            <div className="flex overflow-x-scroll" 
                 style={{
                   scrollbarWidth: 'none', /* Firefox */
                   msOverflowStyle: 'none', /* Internet Explorer 10+ */
                 }}
                 onWheel={(e) => {
                   e.preventDefault();
                   e.currentTarget.scrollLeft += e.deltaY;
                 }}>
            <div className="flex space-x-1">
                {movies?.map((movie)=>
<MovieCard key={movie.id} movie={movie}/>
                )}
            </div> 
            </div>
        </div>
        
    </div>
  )
}

export default MovieList;