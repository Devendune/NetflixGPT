import React from "react";
import { useState } from "react";
import Header from "./Header";
const Login = () => {
    return (
        <div className="header page">
            <Header/>
            <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_medium.jpg" alt="background" />
            </div>
            <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-80 p-8 rounded-lg w-80">
                <input type="text" placeholder="username" className="p-3 m-3 w-full rounded"/>
                <input type="password" placeholder="password" className="p-3 m-3 w-full rounded"/>
                <button className="p-3 m-3 w-full bg-red-600 text-white rounded hover:bg-red-700">Sign In</button>
            </form>
        </div>
    )
};

export default Login;