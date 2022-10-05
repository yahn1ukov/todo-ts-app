import { useCallback, useContext, useEffect } from "react";
import AuthenticationContext from "../../context/auth.context";
import { useAppDispatch } from "../../hooks/dispatch.hook";
import { useHttp } from "../../hooks/http.hook";
import { useAppSelector } from "../../hooks/selector.hook";
import TodoListItem from "../todo-list-item/todo-list-item";
import { fetchTodo } from '../../actions/todo.action';
import { todoDeleted } from '../../slices/todo.slice';

const TodoList = () => {
    const { request } = useHttp();
    const { token } = useContext(AuthenticationContext);
    const dispatch = useAppDispatch();
    const { todo } = useAppSelector(state => state.todo);

    useEffect(() => {
        dispatch(fetchTodo(request, token!));
    }, [dispatch, request, token])


    const onDelete = useCallback(async (id: string) => {
        await request(`https://localhost:7066/api/todo/${id}`, 'DELETE', null, {
            Authorization: `Bearer ${token}`
        })
            .then(() => dispatch(todoDeleted(id)))
    }, [dispatch, request, token]);

    const element = todo.length ?
        todo.map(t => {
            const { id, ...other } = t;
            return <TodoListItem
                key={id}
                id={id}
                onDelete={() => onDelete(id)}
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
