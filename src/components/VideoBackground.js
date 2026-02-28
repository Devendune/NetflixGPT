import React from 'react'
import { options } from '../utils/options';
import  useGetMovieVideos  from '../hooks/useGetMovieVideos';
const VideoBackground = ({movieId}) => 
  {
    const videoData=useGetMovieVideos(movieId);
    console.log(videoData);
  return (
    <div>
        <h1>Video Background</h1>
    </div>
  )
}

export default VideoBackground;