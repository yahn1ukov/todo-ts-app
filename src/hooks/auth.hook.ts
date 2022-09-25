import {useCallback, useEffect, useState} from "react";
import { LoginResponse } from "../types/types";

const userInfo = "token";

export const useAuth = () => {
    const [token, setToken] = useState<string|null>(null);

    const login = useCallback((token: string) => {
        setToken(token);

        localStorage.setItem(userInfo, JSON.stringify({ token }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);

        localStorage.removeItem(userInfo);
    }, []);

    useEffect(() => {
        const data: LoginResponse = JSON.parse(localStorage.getItem(userInfo) ?? "{}");

        if (data && data.token) {
            login(data.token);
        }
    }, [login]);

    return {
        token,
        login,
        logout
    }
}