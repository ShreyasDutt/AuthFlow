import React, {useContext, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import axios from "axios";
import {ErrorToast, SuccessToast} from "../Toasts/ErrorToast.js";
import {AppContext} from "../context/AppContext.jsx"; // Only needed if you're using React Router

const ChangePasswordOTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [newPassword, setNewPassword] = useState('');
    const location = useLocation();
    const { backendurl } = useContext(AppContext);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleChange = (element, index) => {
        if (!/^[0-9]?$/.test(element.value)) return;
        let newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);
        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
        if (pastedData.length === 0) return;

        let newOtp = [...otp];
        for (let i = 0; i < 6; i++) {
            newOtp[i] = pastedData[i] || '';
        }
        setOtp(newOtp);

        const nextInput = document.querySelector(`input[name=otp-${pastedData.length - 1}]`);
        if (nextInput) nextInput.focus();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('OTP:', otp.join(''));
        console.log('New Password:', newPassword);
        const email = location.state?.email || " ";
        console.log('Email:', email);
        const fullOTP = otp.join('');

        try {
            const { data } = await axios.post(`${backendurl}/api/auth/checkpasswordOTP`, { email,OTP:fullOTP,newPassword });
            if (data.success) {
                SuccessToast('Password Changed Successfully.');
                return navigate('/login');
            } else {
                ErrorToast(data.message || 'Something went wrong.');
            }
        } catch (err) {
            ErrorToast(err?.response?.data?.message || 'Something went wrong.');
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-green-900 to-black px-4">
            <div className="bg-green-950 w-full max-w-md rounded-2xl p-8 shadow-2xl space-y-6 border border-green-800">
                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-bold text-white">Reset Password</h2>
                    <p className="text-green-400 text-sm">Enter the OTP sent to your email & create a new password</p>
                </div>

                <div className="flex justify-center gap-3" onPaste={handlePaste}>
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            name={`otp-${index}`}
                            type="text"
                            maxLength="1"
                            value={data}
                            onChange={e => handleChange(e.target, index)}
                            className="w-12 h-14 text-center text-xl rounded-lg border border-green-600 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        />
                    ))}
                </div>

                <div className="space-y-1">
                    <label htmlFor="new-password" className="block text-sm font-medium text-green-300">New Password</label>
                    <input
                        id="new-password"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-green-800 border border-green-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300"
                        placeholder="••••••••"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white font-semibold text-lg shadow-lg hover:from-green-800 hover:to-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Change Password
                </button>

                <p className="text-center text-sm text-green-500">
                    <Link to="/login" className="text-green-400 hover:text-green-300">
                        ← Back to Login
                    </Link>
                </p>

                {/* Footer */}
                <p className="text-xs text-green-600 text-center mt-2">
                    Didn't receive an OTP?{' '}
                    <a href="#" className="text-green-400 hover:text-green-300">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default ChangePasswordOTP;
