import React from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import VerificationOTP from "./Pages/VerificationOTP.jsx";
import ChangePasswordOTP from "./Pages/ChangePasswordOTP.jsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logout from "./Pages/Logout.jsx";
import Profile from "./Pages/Profile.jsx";
import RequestPasswordReset from "./Pages/RequestPasswordReset.jsx";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/send-OTP" element={<RequestPasswordReset />} />
                <Route path="/account-verification" element={<VerificationOTP />} />
                <Route path="/change-password" element={<ChangePasswordOTP />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>

            <ToastContainer />

        </div>
    )
}
export default App
