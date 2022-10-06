import { Dispatch } from "redux";
import { todoFetching, todoFetchedSuccess, todoFetchedError, todoSortedByAsc, todoSortedByDesc } from "../slices/todo.slice";
import { TodoResponse } from '../types/todo';
import { ErrorResponse } from '../types/error';

export const fetchTodo = (request: any, token: string) => async (dispatch: Dispatch) => {
    dispatch(todoFetching())
    await request('https://localhost:7066/api/todo', 'GET', null, {
        Authorization: `Bearer ${token}`
    })
        .then((data: TodoResponse[]) => dispatch(todoFetchedSuccess(data)))
        .catch((error: ErrorResponse) => dispatch(todoFetchedError(error)))
}

export const fetchTodoSortedByAsc = (request: any, token: string) => async (dispatch: Dispatch) => {
    dispatch(todoFetching())
    await request('https://localhost:7066/api/todo/asc', 'GET', null, {
        Authorization: `Bearer ${token}`
    })
        .then((data: TodoResponse[]) => dispatch(todoSortedByAsc(data)))
        .catch((error: ErrorResponse) => dispatch(todoFetchedError(error)))
}

export const fetchTodoSortedByDesc = (request: any, token: string) => async (dispatch: Dispatch) => {
    dispatch(todoFetching())
    await request('https://localhost:7066/api/todo/desc', 'GET', null, {
        Authorization: `Bearer ${token}`
    })
        .then((data: TodoResponse[]) => dispatch(todoSortedByDesc(data)))
        .catch((error: ErrorResponse) => dispatch(todoFetchedError(error)))
}
