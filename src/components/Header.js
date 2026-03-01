import { toggleGPTSearchView } from "../utils/gptSlice";
import { useDispatch } from "react-redux";
const Header=()=>{
    const dispatch = useDispatch();
    const handleGPTSearchClick = () => {
        console.log("GPT Search button clicked");
        dispatch(toggleGPTSearchView());
    };

    return(
        <div className="absolute pt-4 z-50 pl-4">
            <img className="w-32 h-16" src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="logo"/>
            <div className="flex p-2">
                <button onClick={handleGPTSearchClick} className="py-2 px-4 text-white bg-purple-600 rounded-lg cursor-pointer" >
                    GPT Search
                </button>
            </div>
        </div>
    )
}

export default Header;