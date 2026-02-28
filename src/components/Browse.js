import Header from "./Header";
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{
    console.log("browse component rendered");
    const useNowPlayingMovie=useNowPlayingMovies();
    return(
        <div className="text-3xl font-bold bg-black">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browse;