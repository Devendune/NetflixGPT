import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useRef("");
    const password = useRef("");

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = ()=>{
        console.log("Email:", email.current.value);
        console.log("Password:", password.current.value);
        const validationMessage=checkValidData(email.current.value,password.current.value);
        setErrorMessage(validationMessage);
        }

    return (
        <div className="header page">
            <Header/>
            <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_medium.jpg" alt="background" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg w-80 h-300">
                <h1 className="text 4xl text-white mb-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="First Name" className="p-3 m-3 text-white bg-gray-700 w-full rounded"/>}
                <input ref={email} type="text" placeholder="Email or mobile number" className="p-3 m-3 text-white bg-gray-700 w-full rounded"/>
                <input ref={password} type="password" placeholder="Password" className="p-3 m-3 text-white bg-gray-700 w-full rounded"/>
                <p className="text-red-500">{errorMessage}</p>
                <button className="p-3 m-3 w-full bg-red-600 text-white rounded hover:bg-red-700" onClick={handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="text-white" onClick={toggleSignInForm}><span className="text-white-500 cursor-pointer">{ !isSignInForm ? "Already a user Sign in now" : "New to Netflix Sign up"}</span></p>
            </form>
        </div>
    )
};

export default Login;