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

        if(newConnection) {
            setConnection(newConnection);
            newConnection.start()
                .then(async () => {
                    await newConnection.on("LoadTodo", (todo: GetTodoResponse[]) => {
                        setTodo(todo);
                    })
                })
                .catch(error => console.log(error))
        }

        return () => {
            newConnection.stop();
        }
    }, [token]);

    useEffect(() => {
        if(connection) {
            (async () => {
                await connection.on("ReceiveTodo", (todo: GetTodoResponse) => {
                setTodo(prev => [...prev, todo])
            })
            })(); 
        }            
    }, [connection]);

    useEffect(() => {
        if(connection) {
           (async () => {
                await connection.on("DeleteTodo", (todoId: string) => {
                    setTodo(prev => prev.filter(t => t.id !== todoId));
                })
           })(); 
        }
    }, [connection])
        
    return(
        <>
            <ErrorBoundaries>
                <TodoCreateForm connection={connection} />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoFilterPanel />
            </ErrorBoundaries>
            <ErrorBoundaries>
                <TodoList connection={connection} todo={todo} />
            </ErrorBoundaries>
        </>
    );
}