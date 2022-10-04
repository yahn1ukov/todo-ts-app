import { createContext } from "react";
import { AuthContext } from "../types/auth";

const login = (token: string): void => {
};
const logout = (): void => {
};

const AuthenticationContext = createContext<AuthContext>({
    token: null,
    login,
    logout,
    isAuth: false
});

export default AuthenticationContext;
