import { useCallback } from "react";
import { AuthRequest } from "../types/auth";
import { CreateTodoRequest, UpdateTodoRequest } from "../types/todo";

type BodyRequest = AuthRequest | CreateTodoRequest | UpdateTodoRequest;

export const useHttp = () => {
    const request = useCallback(async (url: string, method: string = "GET", body: BodyRequest | null = null, headers: any = {}) => {
        try {
            let jsonBody: string | null = null;

            if (body) {
                jsonBody = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { method, body: jsonBody, headers });

            const data = await response.json();

            if (!response.ok) {
                throw data;
            }

            return data;
        } catch (e: any) {
            throw e;
        }
    }, [])
    return { request }
}
