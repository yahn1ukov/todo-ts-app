import { ErrorResponse } from './error'

export interface CreateTodoRequest {
    text: string;
}

export interface UpdateTodoRequest {
    text: string;
}

export interface TodoResponse {
    id: string;
    text: string;
    isEdited: boolean;
    date: Date;
}

export interface TodoState {
    todo: TodoResponse[];
    loading: boolean;
    error: ErrorResponse | null;
}
