import { UpdateTodoRequest } from "../../types/types";

const TodoBtnEdit = () => {
    const onEdit = async (todoId: string, todo: UpdateTodoRequest) => {
        if(!todo.text) return;
        if(todo.text.length > 100) return;
    }
    
    return (
        <button
            title="Edit"
            type="submit"
            onClick={() => onEdit("", { text: "" })}
            className="mr-2.5 border-2 transition border-purple-400 rounded-md py-1 px-2 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none"
        >
            <i className="fa-solid fa-pen"></i>
        </button>
    );
}

export default TodoBtnEdit;