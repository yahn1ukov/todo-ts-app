import { TodoResponse, ErrorResponse } from './response'

export interface TodoState {
    todo: TodoResponse[];
    loading: boolean;
    error: ErrorResponse | null;
}
