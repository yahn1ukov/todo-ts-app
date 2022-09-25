import { HubConnection } from "@microsoft/signalr";
import { GetTodoResponse } from "../../types/types";
import TodoBtnDelete from "../todo-btn-delete/todo-btn-delete";
import TodoBtnEdit from "../todo-btn-edit/todo-btn-edit";

interface Props {
    connection: HubConnection|null,
    todo: GetTodoResponse
}

const TodoListItem = ({ connection, todo }: Props) => {
    return (
        <li className="flex items-center px-3 py-1.5 bg-slate-800 text-purple-400 border-b-2 border-b-purple-400 last:border-b-0 first:rounded-t-lg last:rounded-b-lg">
            <div className="flex flex-col flex-1 mr-2.5">
                <span className="mb-1 text-lg break-all text-justify">{todo.text}</span>
                <span className="text-sm text-gray-400">{new Date(todo.date).toString()}</span>
            </div>
            <div className="flex-none">
                <TodoBtnEdit todoId={todo.id} connection={connection} />
                <TodoBtnDelete todoId={todo.id} connection={connection} />
            </div>
        </li>
    );
}

export default TodoListItem;