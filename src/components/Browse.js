import Header from "./Header";
import { options } from "../utils/options";
import { useEffect } from "react";
const Browse=()=>{
 
    const getNowPlayingMovies=async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing', options);
        const jsonData=await data.json();
        console.log(jsonData);
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[]);

    return(
        <div className="text-3xl font-bold text-green-500">
            <Header/>
        </div>
    );
};

export default Browse;