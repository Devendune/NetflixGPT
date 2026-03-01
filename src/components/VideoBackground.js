import React from 'react'
import { options } from '../utils/constants';
import { useSelector } from 'react-redux';
import useGetMovieVideos from '../hooks/useGetMovieVideos'; // Remove {} for default import
const VideoBackground = ({movieId}) => 
  {
    useGetMovieVideos(movieId); 
    const trailerVideo=useSelector((store)=>store.movies.trailerVideo);
    
    if(!trailerVideo) return null;
      
  return (
    <div>
        <div>
          <iframe className="w-screen aspect-video object-cover"
          src={`https://www.youtube.com/embed/${trailerVideo.key}?&autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&loop=1&playlist=${trailerVideo.key}&cc_load_policy=0&playsinline=1&origin=${window.location.origin}`}
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
          </iframe>
        </div>
    </div>
  )
}

export default VideoBackground;