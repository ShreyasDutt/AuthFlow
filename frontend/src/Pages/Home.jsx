import React, { useContext, useEffect } from 'react';
import Navbar from "../Components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";


const Home = () => {
    const { isLoggedIn, backendurl } = useContext(AppContext);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;



    useEffect(() => {
        if (!isLoggedIn) {
            return navigate("/login");
        }
    }, [isLoggedIn, navigate, backendurl]);

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Navbar />

        </div>
    );
};

export default Home;