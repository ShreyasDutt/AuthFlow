import React, {useContext, useEffect, useState} from 'react';
import {ErrorToast, SuccessToast} from "../Toasts/ErrorToast.js";
import {AppContext} from "../context/AppContext.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const {backendurl, setIsLoggedIn, isLoggedIn,setUserdata} = useContext(AppContext);

    useEffect(() => {
        if (isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password.length < 6) {
            return ErrorToast("Password should be at least 6 characters");
        }
        // const { username, email, password } = req.body;
        axios.defaults.withCredentials = true;
        try{
           const {data} = await axios.post(backendurl+"/api/auth/register", {username, email, password})

            if (data.success){
                localStorage.setItem("LoggedInFlag",true)
                setIsLoggedIn(true);
                const {data} = await axios.get(backendurl+"/api/user/getUserdata",{})
                setUserdata(data);
                SuccessToast(`Hi👋🏻 ${data.username} `);
                navigate("/");
            }

        }catch(error){
            const serverMessage = error?.response?.data?.message || "Something went wrong";
           return ErrorToast(serverMessage);
        }

    };

    return (
        <div className="flex h-screen w-full bg-black">
            {/* Left - Branding */}
            <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-black  via-green-900 to-black items-center justify-center">
                <div className="px-8 py-12 text-center">
                    {/* ✅ updated brand name and theme */}
                    <h1 className="text-5xl font-extrabold text-green-500 mb-6 tracking-wide">SecureAuth</h1>
                    <p className="text-green-300 text-xl mb-8">Robust. Secure. Modern Authentication.</p>
                    <div className="space-y-8">
                        <div className="flex items-center">
                            <div className="bg-green-500 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p className="ml-4 text-white text-left">JWT authentication & authorization</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-500 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <p className="ml-4 text-white text-left">Email verification with OTP</p>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-500 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <p className="ml-4 text-white text-left">Secure password reset workflow</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center bg-black bg-opacity-95">
                <div className="w-full max-w-md p-8">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-white mb-2">Create your Account</h2>
                        <p className="text-green-400">Get started and join the Community</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-green-300 mb-1">Username</label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Your username"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-green-300 mb-1">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-green-300 mb-1">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="••••••••"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/login" className="font-medium text-green-500 hover:text-green-400">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
