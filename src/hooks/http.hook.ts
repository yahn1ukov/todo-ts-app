import { ErrorResponse } from "@remix-run/router";
import {useCallback, useState} from "react";
import { BodyRequest } from "../types/types";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ErrorResponse|null>(null);

    const request = useCallback(async (url: string, method: string = "GET", body: BodyRequest|string|null = null, headers: any = {}) => {
        setLoading(true);
        try {
            if (body) {
                body = JSON.stringify(body);
                headers["Content-Type"] = "application/json";
            }

            const response = await fetch(url, {
                method,
                body,
                headers
            });

            const data = await response.json();
          
            if (!response.ok) {
                throw new Error(data.message);
            }

            setLoading(false);
           
            return data;
        } catch (e: any) {
            setLoading(false);
            
            setError(e.message);
           
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {
        loading,
        request,
        error,
        clearError
    }
}