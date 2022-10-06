import { useContext } from 'react';
import { useAppDispatch } from "../../hooks/dispatch.hook";
import { useHttp } from "../../hooks/http.hook";
import { fetchTodoSortedByAsc } from '../../actions/todo.action';
import AuthenticationContext from "../../context/auth.context";

const TodoBtnFilterAsc = () => {
    const dispatch = useAppDispatch();
    const { request } = useHttp();
    const { token } = useContext(AuthenticationContext);

    return (
        <button
            title="Sort by ascending"
            type="submit"
            onClick={() => dispatch(fetchTodoSortedByAsc(request, token!))}
            className="mr-2.5 border-2 font-bold transition border-purple-400 text-purple-400 rounded-md py-1 px-2.5 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            A-Z
        </button>
    );
}

export default TodoBtnFilterAsc;
