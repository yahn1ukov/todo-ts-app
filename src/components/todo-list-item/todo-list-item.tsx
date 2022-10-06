import { Field, Form, Formik } from "formik";
import { UpdateTodoRequest } from "../../types/todo";
import TodoBtnDelete from "../todo-btn-delete/todo-btn-delete";
import { useContext } from 'react';
import AuthenticationContext from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import { useAppDispatch } from "../../hooks/dispatch.hook";
import { todoEdited } from '../../slices/todo.slice';

interface Props {
    id: string;
    text: string;
    isEdited: boolean;
    onDelete: () => Promise<void>
}

const TodoListItem = ({ id, text, isEdited, onDelete }: Props) => {
    const initialValues: UpdateTodoRequest = {
        text
    }
    const { token } = useContext(AuthenticationContext);
    const { request } = useHttp();
    const dispatch = useAppDispatch();

    const onEdit = async (id: string, values: UpdateTodoRequest) => {
        if (!values.text) return;
        if (values.text.length > 100) return;
        await request(`https://localhost:7066/api/todo/${id}`, 'PATCH', values, {
            Authorization: `Bearer ${token}`
        })
            .then(() => dispatch(todoEdited({ id, text: values.text, isEdited: true })))
    };

    return (
        <li className="flex pl-2.5 pr-1.5 py-1.5 bg-slate-800 text-purple-400 border-b-2 border-b-purple-400 last:border-b-0 first:rounded-t-lg last:rounded-b-lg">
            <div className="flex flex-col flex-1">
                <Formik
                    initialValues={initialValues}
                    onSubmit={values => onEdit(id, values)}
                >
                    <Form className="flex-1 flex">
                        <Field
                            id="todo-title"
                            name="text"
                            type="text"
                            className="flex-1 text-purple-400 bg-slate-800 mr-2.5 focus:outline-none"

                        />
                        <button
                            title="Edit"
                            type="submit"
                            className="flex-none mr-2.5 border-2 transition border-purple-400 rounded-md py-1 px-2 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none"
                        >
                            <i className="fa-solid fa-pen"></i>
                        </button>
                    </Form>
                </Formik>
                {isEdited && <span className="text-sm opacity-70 mr-2.5">Edited</span>}
            </div>
            <div className="flex-none">
                <TodoBtnDelete onDelete={onDelete} />
            </div>
        </li >
    );
}

export default TodoListItem;
