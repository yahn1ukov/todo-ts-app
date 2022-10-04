import { TodoResponse } from "../../types/todo";
import TodoListItem from "../todo-list-item/todo-list-item";

interface Props {
    todo: TodoResponse[];
}

const TodoList = ({ todo }: Props) => {
    const element = todo.length ?
        todo.map(t => {
            const { id, ...other } = t;
            return <TodoListItem
                key={id}
                {...other}
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
