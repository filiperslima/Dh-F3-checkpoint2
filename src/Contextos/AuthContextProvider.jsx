import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext({});


function AuthContextProvider({ children }) {
    const [hasUser, setHasUser] = useState();
    const logoutUser = () => {
        setHasUser(false)
        return localStorage.removeItem("token")
    }

    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setHasUser(true)
        }
    }, [])


    return (
        <AuthContext.Provider value={{ hasUser, setHasUser, logoutUser }}>{children}</AuthContext.Provider>
    );
}

export default AuthContextProvider;