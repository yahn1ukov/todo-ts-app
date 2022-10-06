import { useContext } from 'react';
import AuthenticationContext from "../../context/auth.context";
import { useAppDispatch } from "../../hooks/dispatch.hook";
import { useHttp } from "../../hooks/http.hook";
import { fetchTodoSortedByDesc } from '../../actions/todo.action';

const TodoBtnFilterDesc = () => {
    const dispatch = useAppDispatch();
    const { request } = useHttp();
    const { token } = useContext(AuthenticationContext);

    return (
        <button
            title="Sort by descending"
            type="submit"
            onClick={() => dispatch(fetchTodoSortedByDesc(request, token!))}
            className="mr-2.5 font-bold border-2 transition border-purple-400 text-purple-400 rounded-md py-1 px-2.5 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            Z-A
        </button>
    );
}

export default TodoBtnFilterDesc;
