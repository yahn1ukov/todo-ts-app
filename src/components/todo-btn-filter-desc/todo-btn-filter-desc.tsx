import { useContext } from "react";
import AuthenticationContext from "../../context/auth.context";
import { useAppDispatch } from "../../hooks/dispatch.hook";
import { useHttp } from "../../hooks/http.hook";
import { fetchTodoDesc } from '../../actions/todo.action';

const TodoBtnFilterDesc = () => {
    const { token } = useContext(AuthenticationContext);
    const { request } = useHttp();
    const dispatch = useAppDispatch();

    return (
        <button
            title="Sort by descending"
            type="submit"
            onClick={() => dispatch(fetchTodoDesc(request, token!))}
            className="mr-2.5 border-2 transition border-purple-400 text-purple-400 rounded-md py-1 px-2.5 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            <i className="fa-solid fa-arrow-down"></i>
        </button>
    );
}

export default TodoBtnFilterDesc;
