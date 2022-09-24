import {useCallback, useState} from "react";
import { BodyRequest, ErrorResponse } from "../types/types";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<ErrorResponse|null>(null);

    const request = useCallback(async (url: string, method: string = "GET", body: BodyRequest|null = null, headers: any = {}) => {
        setLoading(true);
        try {
            if (body) {
                headers["Content-Type"] = "application/json";
            }

            const response = await fetch(url, {
                method,
                body: JSON.stringify(body),
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
            
            setError(e);
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