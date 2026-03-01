import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies  from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
const Browse=()=>{
    const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);
    console.log("showGPTSearch in Browse component:", showGPTSearch);
    const useNowPlayingMovie=useNowPlayingMovies();

    return(
        <div className="text-3xl font-bold bg-black">
            <Header/>
            {showGPTSearch ? (
                <GPTSearch/>
            ):
            (
                <>
                <MainContainer/>
                <SecondaryContainer/>
                </>
            )}
        </div>
    );
};

export default Browse;