import { options } from "../utils/options";
import { useEffect } from "react";
const useGetMovieVideos=(movieId)=>
{
    const getMovieVideos=async (movieId)=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options
        );
        const jsonData=await data.json();
        console.log("Video Data",jsonData); 
    };

    useEffect(()=>{
        getMovieVideos(movieId);
    },[]);
}

export default useGetMovieVideos;