import { useAppDispatch } from "../../hooks/dispatch.hook";
import { fetchTodo } from '../../actions/todo.action';
import { useContext } from "react";
import AuthenticationContext from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";

const TodoBtnFilterRefresh = () => {
    const dispatch = useAppDispatch();
    const { token } = useContext(AuthenticationContext);
    const { request } = useHttp();

    return (
        <button
            title="Refresh"
            type="submit"
            onClick={() => dispatch(fetchTodo(request, token!))}
            className="mr-2.5 border-2 transition border-purple-400 text-purple-400 rounded-md py-1 px-2 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            <i className="fa-solid fa-arrows-rotate"></i>
        </button>
    );
}

export default TodoBtnFilterRefresh;
