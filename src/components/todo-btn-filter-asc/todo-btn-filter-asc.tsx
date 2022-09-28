import { useCallback, useContext } from "react";
import AuthContext from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import { GetTodoResponse } from "../../types/types";

const TodoBtnFilterAsc = () => {
    const { request } = useHttp();
    const { token } = useContext(AuthContext);

    const onSortAsc = useCallback(async () => {
        try {
            const data: GetTodoResponse[] = await request("https://localhost:7066/api/todo", "GET", null, {
                Authorization: `Bearer ${token}`
            });
        } catch(e) { }
    }, [token, request]); 
    
    return (
        <button
            title="Sort by ascending"
            type="submit"
            onClick={onSortAsc}
            className="mr-2.5 border-2 transition border-purple-400 text-purple-400 rounded-md py-1 px-2.5 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none flex-none"
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default TodoBtnFilterAsc;