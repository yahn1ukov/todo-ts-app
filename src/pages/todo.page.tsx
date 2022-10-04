import { useCallback, useEffect } from "react";
import ErrorBoundaries from "../components/error-boundaries/error-boundaries";
import TodoCreateForm from "../components/todo-create-form/todo-create-form";
import TodoFilterPanel from "../components/todo-filter-panel/todo-filter-panel";
import TodoList from "../components/todo-list/todo-list";
import { useHttp } from "../hooks/http.hook";
import { TodoResponse } from '../types/todo';

export const TodoPage = () => {
    const { request } = useHttp();

    return (
        <>
            <ErrorBoundaries>
                <TodoCreateForm />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoFilterPanel />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoList todo={[]} />
            </ErrorBoundaries>
        </>
    );
}
