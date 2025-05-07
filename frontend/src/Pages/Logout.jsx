import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ErrorToast } from "../Toasts/ErrorToast.js";
import axios from "axios";
import { AppContext } from "../context/AppContext.jsx";

const Logout = () => {
    const navigate = useNavigate();
    const { setIsLoggedIn, setUserdata, backendurl } = useContext(AppContext);

    useEffect(() => {
        const handleLogout = async () => {
            setIsLoggedIn(false);
            setUserdata(null);
            localStorage.removeItem("LoggedInFlag");

            try {
                const { data } = await axios.post(backendurl + "/api/logout", {}, {
                    withCredentials: true
                });

                if (data.success) {
                    navigate("/");
                }
            } catch (e) {
                console.log(e);
                ErrorToast("Logged out");
                navigate("/");
            }
        };

        handleLogout();
    }, []);

    return null;
};

export default Logout;
