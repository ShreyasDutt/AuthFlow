import React, { useContext, useEffect } from 'react';
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";
import Navbar from "../Components/Navbar.jsx";
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuccessToast } from "../Toasts/ErrorToast.js";
import { FiLogOut } from 'react-icons/fi';

const Profile = () => {
    const { userdata, backendurl, setUserdata } = useContext(AppContext);
    axios.defaults.withCredentials = true;

    const navigate = useNavigate();

    const GetUserData = async () => {
        try {
            const { data } = await axios.get(`${backendurl}/api/user/getUserdata`);
            setUserdata(data);
        } catch (err) {
            console.log(err);
        }
    };

    const sendVerificationOTP = async () => {
        try {
            const { data } = await axios.post(`${backendurl}/api/auth/verifyOTP`);
            if (data.success) {
                navigate("/account-verification");
            }
        } catch (err) {
            return ErrorToast(err.message);
        }
    };

    const handleLogout = () => {
     navigate("/logout")
    };

    useEffect(() => {
        GetUserData();
    }, []);

    return (
        <div className="bg-black min-h-screen">
            <Navbar />

            <div className="p-6 max-w-4xl mx-auto">
                {/* Profile Header with Logout Button */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Your Profile</h2>
                    <button
                        onClick={handleLogout}
                        className="cursor-pointer bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md flex items-center gap-2 transition duration-300 ease-in-out"
                    >
                        <FiLogOut className="text-lg" />
                        Logout
                    </button>
                </div>

                {userdata ? (
                    <div className="bg-gray-900 rounded-lg p-6 shadow-md space-y-4 text-white border border-gray-800">
                        <p>
                            <span className="font-semibold text-green-400">Username:</span> {userdata.username}
                        </p>
                        <p>
                            <span className="font-semibold text-green-400">Email:</span> {userdata.email}
                        </p>
                        <p>
                            {!userdata.isVerified && (
                                <button
                                    onClick={() => {
                                        sendVerificationOTP().then(() => {
                                            SuccessToast("Verification OTP sent to your email");
                                        });
                                    }}
                                    className="bg-gradient-to-r from-green-700 to-green-500 hover:from-green-800 hover:to-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                                >
                                    Verify your Account
                                </button>
                            )}
                        </p>
                    </div>
                ) : (
                    <p className="text-gray-400">Loading...</p>
                )}
            </div>

        </div>
    );
};

export default Profile;
