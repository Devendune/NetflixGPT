import { options } from "../utils/options";
import { useEffect, useState } from "react";

const useGetMovieVideos = (movieId) => {
    const [trailerVideo, setTrailerVideo] = useState(null);

    const getMovieVideos = async (movieId) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        const jsonData = await data.json();
        console.log("All videos:", jsonData.results);
        
        // Find trailer video
        const filterData = jsonData.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : jsonData.results[0];
        
        setTrailerVideo(trailer);
    };

    useEffect(() => {
        if (movieId) {
            getMovieVideos(movieId);
        }
    }, [movieId]);

    return trailerVideo; // Return the trailer data
}

export default useGetMovieVideos;