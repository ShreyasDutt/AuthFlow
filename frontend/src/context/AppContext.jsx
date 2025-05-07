// AppContext.jsx
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const backendurl = import.meta.env.VITE_BACKENDURL;

    const storedLoginFlag = localStorage.getItem("LoggedInFlag") === "true";
    const [isLoggedIn, setIsLoggedIn] = useState(storedLoginFlag);
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        localStorage.setItem("LoggedInFlag", isLoggedIn);
    }, [isLoggedIn]);

    const value = {
        backendurl,
        isLoggedIn,
        setIsLoggedIn,
        userdata,
        setUserdata
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
