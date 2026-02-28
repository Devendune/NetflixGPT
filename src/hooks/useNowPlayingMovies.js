import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useSelector } from "react-redux";


const useNowPlayingMovies=()=>{
    
    const dispatch=useDispatch();
    const getNowPlayingMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing', options);
        const jsonData=await data.json();
        
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);
}

export default useNowPlayingMovies;