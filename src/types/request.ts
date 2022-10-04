export interface LoginRequest {
    username: string;
    password: string;
}

export interface CreateTodoRequest {
    text: string;
}

export interface UpdateTodoRequest {
    text: string;
}

export type BodyRequest = LoginRequest | CreateTodoRequest | UpdateTodoRequest;
