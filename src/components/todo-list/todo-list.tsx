import { HubConnection } from "@microsoft/signalr";
import { GetTodoResponse } from "../../types/types";
import TodoListItem from "../todo-list-item/todo-list-item";

interface Props {
    todo: GetTodoResponse[],
    connection: HubConnection|null
}

const TodoList = ({ todo, connection }: Props) => {
    const element = todo.length ?
        todo.map(t => {
            return <TodoListItem
                key={t.id}
                connection={connection}
               todo={t} 
            />
        }) :
        <li className="px-3 py-1.5 text-center text-purple-400 font-bold">You haven't todo yet.</li>

    return (
        <ul className="border-2 border-purple-400 rounded-md">
            {element}
        </ul>
    );
}

export default TodoList;