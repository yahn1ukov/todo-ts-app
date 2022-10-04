import { createContext } from "react";
import { AuthenticationContext } from "../types/authentication";

const login = (token: string): void => { }
const logout = (): void => { }

const AuthContext = createContext<AuthenticationContext>({
    token: null,
    login,
    logout,
    isAuth: false
});

export default AuthContext;
