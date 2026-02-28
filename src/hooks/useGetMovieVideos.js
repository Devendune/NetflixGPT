import { options } from "../utils/constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
const useGetMovieVideos = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async (movieId) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, options);
        const jsonData = await data.json();
        
        // Find trailer video
        const filterData = jsonData.results.filter(video => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : jsonData.results[0];
        dispatch(addTrailerVideo(trailer)); // Dispatch the trailer video to Redux store
    };

    useEffect(() => {
        if (movieId) {
            getMovieVideos(movieId);
        }
    }, [movieId]);

}

export default useGetMovieVideos;