import React, {useContext, useState} from 'react';
import {ErrorToast, SuccessToast} from "../Toasts/ErrorToast.js";
import axios from "axios";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";

const VerificationOtp = () => {
    const [OTP, setOtp] = useState(new Array(6).fill(''));
    const { backendurl } = useContext(AppContext);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const verifyOTP = async () => {
        try{
            const fullOTP = OTP.join('');
            const {data} = await axios.post(backendurl+"/api/auth/checkOTP",{OTP:fullOTP});
            if(data.success){
                SuccessToast('Account successfully verified!');
                navigate('/');
            }
        }catch(err){
           return ErrorToast(err.message);
        }
    }

    const handleChange = (element, index) => {
        if (!/^[0-9]?$/.test(element.value)) return;
        let newOtp = [...OTP];
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

        let newOtp = [...OTP];
        for (let i = 0; i < 6; i++) {
            newOtp[i] = pastedData[i] || '';
        }
        setOtp(newOtp);

        const nextInput = document.querySelector(`input[name=otp-${pastedData.length - 1}]`);
        if (nextInput) nextInput.focus();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('OTP:', OTP.join(''));
        verifyOTP();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-green-900 to-black px-4">
            <div className="bg-green-950 w-full max-w-md rounded-2xl p-8 shadow-2xl space-y-6 border border-green-800">
                <div className="text-center space-y-2">
                    <h2 className="text-4xl font-bold text-white">Account Verification</h2>
                    <p className="text-green-400 text-sm">Enter the OTP sent to your email to verify your account</p>
                </div>

                {/* OTP Inputs */}
                <form onSubmit={handleSubmit} onPaste={handlePaste} className="space-y-6">
                    <div className="flex justify-center gap-3">
                        {OTP.map((data, index) => (
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

                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-green-700 to-green-500 text-white font-semibold text-lg shadow-lg hover:from-green-800 hover:to-green-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Verify Account
                    </button>
                </form>

                {/* Footer */}
                <p className="text-xs text-green-600 text-center mt-2">
                    Didn't receive an OTP?{' '}
                    <a href="#" className="text-green-400 hover:text-green-300">Resend</a>
                </p>
            </div>
        </div>
    );
};

export default VerificationOtp;
