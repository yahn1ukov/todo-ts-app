import { TodoResponse, ErrorResponse } from '../types/response';

export enum TodoActionTypes {
    TODO_FETCHING = 'TODO_FETCHING',
    TODO_FETCHED = 'TODO_FETCHED',
    TODO_FETCHING_ERROR = 'TODO_FETCHING_ERROR'
}

interface TodoFetchingAction {
    type: TodoActionTypes.TODO_FETCHING;
}

interface TodoFetchedAction {
    type: TodoActionTypes.TODO_FETCHED;
    payload: TodoResponse[];
}

interface TodoFetchingErrorAction {
    type: TodoActionTypes.TODO_FETCHING_ERROR;
    payload: ErrorResponse;
}

export type TodoAction = TodoFetchingAction | TodoFetchedAction | TodoFetchingErrorAction;
