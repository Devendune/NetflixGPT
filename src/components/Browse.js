import Header from "./Header";
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse=()=>{

    const useNowPlayingMovie=useNowPlayingMovies();
    return(
        <div className="text-3xl font-bold text-green-500">
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browse;