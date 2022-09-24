import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { useContext, useEffect, useState } from "react";
import ErrorBoundaries from "../components/error-boundaries/error-boundaries";
import TodoCreateForm from "../components/todo-create-form/todo-create-form";
import TodoFilterPanel from "../components/todo-filter-panel/todo-filter-panel";
import TodoList from "../components/todo-list/todo-list";
import AuthContext from "../context/auth.context";
import { GetTodoResponse } from "../types/types";

export const TodoPage = () => {
    const { token } = useContext(AuthContext);
    const [connection, setConnection] = useState<HubConnection|null>(null);
    const [todo, setTodo] = useState<GetTodoResponse[]>([]);

    useEffect(() => {
        const newConnection = new HubConnectionBuilder()
            .withUrl("https://localhost:7066/hubs/todo", { 
                accessTokenFactory: () => token as string
            })
            .withAutomaticReconnect()
            .build();

        setConnection(newConnection);
    }, [token]);

    useEffect(() => {
        if(connection) {
            console.log("Connected");
            connection.start()
                .then(() => {
                    connection.on("LoadTodo", (todo: GetTodoResponse[]) => {
                        setTodo(todo);
                    })
                })
                .catch(error => console.log(error))
        }

        return () => {
            console.log("Disconnected");
            connection?.stop();
        }
    }, [connection]);

    return(
        <>
            <ErrorBoundaries>
                <TodoCreateForm />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoFilterPanel />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoList todo={todo} />
            </ErrorBoundaries>
        </>
    );
}