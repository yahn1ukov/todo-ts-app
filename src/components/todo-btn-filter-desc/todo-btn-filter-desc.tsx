import { useAppDispatch } from "../../hooks/dispatch.hook";
import { useAppSelector } from "../../hooks/selector.hook";
import { todoSortedByDesc } from '../../slices/todo.slice';

const TodoBtnFilterDesc = () => {
    const dispatch = useAppDispatch();
    const { todo } = useAppSelector(state => state.todo);

    return (
        <button
            title="Sort by descending"
            type="submit"
            onClick={() => dispatch(todoSortedByDesc(todo))}
            className="mr-2.5 border-2 transition border-purple-400 text-purple-400 rounded-md py-1 px-2.5 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            <i className="fa-solid fa-arrow-down"></i>
        </button>
    );
}

export default TodoBtnFilterDesc;
