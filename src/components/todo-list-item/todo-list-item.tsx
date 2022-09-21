import TodoBtnDelete from "../todo-btn-delete/todo-btn-delete";
import TodoBtnEdit from "../todo-btn-edit/todo-btn-edit";

interface Props {
    text: string,
    date: Date
}

const TodoListItem = ({ text, date }: Props) => {
    return (
        <li className="flex items-center px-3 py-1.5 bg-slate-800 text-purple-400 border-b-2 border-b-purple-400 last:border-b-0 first:rounded-t-lg last:rounded-b-lg">
            <div className="flex flex-col flex-1 mr-2.5">
                <span className="mb-1 text-lg break-all text-justify">{text}</span>
                <span className="text-sm text-gray-400">{date.toLocaleDateString("en-US", { weekday: "long", day: "numeric", year: "numeric", month: "long" })}</span>
            </div>
            <div className="flex-none">
                <TodoBtnEdit />
                <TodoBtnDelete />
            </div>
        </li>
    );
}

export default TodoListItem;