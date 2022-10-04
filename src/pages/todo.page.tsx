import { useCallback, useState, useContext, useEffect } from "react";
import ErrorBoundaries from "../components/error-boundaries/error-boundaries";
import TodoCreateForm from "../components/todo-create-form/todo-create-form";
import TodoFilterPanel from "../components/todo-filter-panel/todo-filter-panel";
import TodoList from "../components/todo-list/todo-list";
import AuthContext from "../context/auth.context";
import { useHttp } from "../hooks/http.hook";
import { TodoResponse } from '../types/response';

export const TodoPage = () => {
    const [todo, setTodo] = useState<TodoResponse[]>([]);
    const { request } = useHttp();
    const { token } = useContext(AuthContext);

    const getTodo = useCallback(async () => {
        try {
            const data: TodoResponse[] = await request("https://localhost:7066/api/todo", "GET", null, {
                Authorization: `Bearer ${token}`
            });
            setTodo(data);
        } catch (e) { }
    }, [token, request]);

    useEffect(() => {
        getTodo()
    }, [getTodo]);

    return (
        <>
            <ErrorBoundaries>
                <TodoCreateForm />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoFilterPanel getTodo={getTodo} />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoList todo={todo} />
            </ErrorBoundaries>
        </>
    );
}
