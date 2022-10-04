import { useCallback } from "react";
import { BodyRequest } from "../types/request";

export const useHttp = () => {
    const request = useCallback(async (url: string, method: string = "GET", body: BodyRequest | null = null, headers: any = {}) => {
        try {
            let jsonBody: string | null = null;

            if (body) {
                jsonBody = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { method, body: jsonBody, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();

            return data;
        } catch (e: any) {
            throw e;
        }
    }, []);

    return { request }
}
