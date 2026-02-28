import React from 'react'
import { options } from '../utils/options';
import useGetMovieVideos from '../hooks/useGetMovieVideos'; // Remove {} for default import
const VideoBackground = ({movieId}) => 
  {
    const trailer = useGetMovieVideos(movieId);
    console.log("Trailer data:", trailer);
    
  return (
    <div>
        <h1>Video Background</h1>
        <p>Movie ID: {movieId}</p>
        <div>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/auHiLFjaIc0?si=HLHcGci_gr-ae5tq"
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
          </iframe>
        </div>
    </div>
  )
}

export default VideoBackground;