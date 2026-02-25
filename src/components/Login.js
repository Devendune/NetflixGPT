import React from "react";
import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const firstName = useRef("");
    const email = useRef("");
    const password = useRef("");

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(""); // Clear error message when toggling
    };

    const handleButtonClick = async () => {
        console.log("Email:", email.current.value);
        console.log("Password:", password.current.value);
        
        // Client-side validation
        const validationMessage = checkValidData(email.current.value, password.current.value);
        if (validationMessage) {
            setErrorMessage(validationMessage);
            return;
        }

        try {
            if (isSignInForm) {
                // LOGIN
                const loginData = {
                    email: email.current.value,
                    password: password.current.value
                };

                const response = await fetch('http://localhost:8080/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(loginData)
                });

                const data = await response.json();

                if (response.ok && data.status === 200) {
                    // Login successful
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify({
                        id: data.id,
                        email: data.email,
                        name: data.name
                    }));
                    setErrorMessage("");
                    console.log("Login successful!", data);
                    alert("Login successful!");
                    // TODO: Navigate to browse page
                } else {
                    setErrorMessage(data.message || "Login failed");
                }

            } else {
                // SIGNUP
                const signupData = {
                    firstName: firstName.current.value,
                    lastName: "User", // Default last name
                    email: email.current.value,
                    password: password.current.value,
                    phoneNumber: "1234567890" // Default phone
                };

                const response = await fetch('http://localhost:8080/api/auth/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(signupData)
                });

                const data = await response.json();

                if (response.ok && data.status === 200) {
                    // Signup successful
                    setErrorMessage("");
                    console.log("Signup successful!", data);
                    alert("Account created successfully! Please sign in.");
                    setIsSignInForm(true); // Switch to login form
                } else {
                    setErrorMessage(data.message || "Signup failed");
                }
            }

        } catch (error) {
            console.error("API Error:", error);
            setErrorMessage("Network error. Please try again.");
        }
    }

    return (
        <div className="header page">
            <Header/>
            <div className="">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_medium.jpg" alt="background" />
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center bg-black bg-opacity-70 p-8 rounded-lg w-80 h-300">
                <h1 className="text 4xl text-white mb-4">{ isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input ref={firstName} type="text" placeholder="First Name" className="p-3 m-3 text-white bg-gray-700 w-full rounded"/>}
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