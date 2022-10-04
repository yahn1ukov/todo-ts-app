import { useCallback } from "react";
import { Field, Form, Formik } from "formik";
import { useHttp } from "../../hooks/http.hook";
import { CreateTodoRequest } from "../../types/todo";

const TodoCreateForm = () => {
    const { request } = useHttp();
    const initialValues: CreateTodoRequest = {
        text: ""
    };

    const onSubmit = (values: CreateTodoRequest) => { }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm({ values: { text: "" } });
            }}
        >
            <Form className="mb-2.5 flex">
                <Field
                    className="border-2 transition bg-slate-800 border-purple-400 mr-2.5 py-2 px-3 rounded-md text-sm placeholder:text-purple-400 placeholder:opacity-60 flex-1 focus:ring focus:outline-none focus:ring-purple-400 text-purple-400"
                    placeholder="Enter a new task"
                    name="text"
                    type="text"
                />
                <button
                    type="submit"
                    className="border-2 bg-slate-800 transition border-purple-400 px-2 rounded-md font-bold text-purple-400 flex-none hover:bg-purple-400 hover:text-slate-800 focus:ring focus:outline-none focus:ring-purple-400"
                >
                    Add
                </button>
            </Form>
        </Formik>
    );
}

export default TodoCreateForm;
