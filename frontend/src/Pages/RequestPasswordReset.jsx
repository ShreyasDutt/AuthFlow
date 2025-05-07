import React, { useState } from 'react';
import axios from 'axios';
import { SuccessToast, ErrorToast } from '../Toasts/ErrorToast.js';
import { AppContext } from '../context/AppContext.jsx';
import { useContext } from 'react';
import {useNavigate} from "react-router-dom";

const RequestPasswordReset = () => {
    const [email, setEmail] = useState('');
    const { backendurl } = useContext(AppContext);

    const navigate = useNavigate();

    const handleSendOTP = async (e) => {
        e.preventDefault();
        if (!email) return ErrorToast('Please enter your email.');
        axios.defaults.withCredentials = true;

        try {
            const { data } = await axios.post(`${backendurl}/api/auth/passwordresetOTP`, { email });
            if (data.success) {
                 SuccessToast('OTP sent to your email!');
                 navigate('/change-password',{state:{email}});
            } else {
                ErrorToast(data.message || 'Something went wrong.');
            }
        } catch (err) {
            ErrorToast(err?.response?.data?.message || 'Failed to send OTP.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-green-900 to-black px-4">
            <div className="bg-green-950 w-full max-w-md rounded-2xl p-8 shadow-2xl space-y-6 border border-green-800">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold text-white">Forgot Your Password?</h2>
                    <p className="text-green-400 text-sm">Enter your email and we’ll send you an OTP to reset your password.</p>
                </div>

                <form onSubmit={handleSendOTP} className="space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-green-300">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-green-800 border border-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                            placeholder="you@example.com"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white font-semibold text-lg shadow-lg hover:from-green-800 hover:to-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Send OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RequestPasswordReset;
