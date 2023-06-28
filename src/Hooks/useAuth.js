import { useContext } from "react";

import { AuthContext } from "../Contextos/AuthContextProvider";

function useAuth() {
    const context = useContext(AuthContext)
    return context;
}

export default useAuth;