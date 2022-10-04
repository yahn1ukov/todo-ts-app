import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext, useState } from "react";
import AuthContext from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import MessageError from "../message-error/message-error";
import MessageLoading from "../message-loading/message-loading";
import * as Yup from "yup";
import { LoginRequest } from '../../types/request';
import { useTypedSelector } from "../../hooks/selector.hook";
import { useAction } from "../../hooks/action.hook";

const AuthenticationForm = () => {
    const initialValues: LoginRequest = {
        username: "",
        password: ""
    }
    const [isPassword, setIsPassword] = useState(true);
    const { login } = useContext(AuthContext);
    const { request } = useHttp();
    const { fetchAuthentication } = useAction();
    const { loading, user, error } = useTypedSelector(state => state.authentication);

    const onHidePassword = (value: boolean) => {
        setIsPassword(value);
    }

    const onSubmit = (values: LoginRequest) => {
        fetchAuthentication(request, values);
        login("");
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
                username: Yup.string()
                    .min(1, "Username must be at least 1 character")
                    .max(12, "Username must be at most 12 characters")
                    .required("Username is a required filed"),
                password: Yup.string()
                    .min(1, "Password must be at least 1 character")
                    .max(20, "Password must be at most 20 characters")
                    .required("Password is a required field")
            })}
            onSubmit={(values, { resetForm }) => {
                onSubmit(values);
                resetForm({ values: { username: "", password: "" } });

            }}
        >
            <Form className="flex flex-col items-center border-2 border-purple-400 rounded-md py-4 px-5">
                <h2 className="text-purple-400 text-lg font-bold mb-2.5">Authentication</h2>
                {/* state.error && <MessageError error={state.error} /> */}
                {/* state.loading && <MessageLoading /> */}
                <div className="flex flex-col mb-2.5">
                    <label
                        id="auth-form-username"
                        className="font-bold text-purple-400 mb-1.5"
                    >
                        Username
                    </label>
                    <Field
                        id="auth-form-username"
                        className="px-2.5 w-[250px] h-[35px] text-sm text-purple-400 bg-slate-800 border-2 border-purple-400 rounded-md focus:outline-none"
                        type="text"
                        name="username"
                    />
                    <ErrorMessage
                        name="username"
                        component="span"
                        className="text-sm text-red-400 text-center"
                    />
                </div>
                <div className="flex flex-col mb-2.5">
                    <label
                        id="auth-form-password"
                        className="font-bold text-purple-400 mb-1.5"
                    >
                        Password
                    </label>
                    <div className="px-2.5 w-[250px] h-[35px] flex items-center justify-between border-2 border-purple-400 rounded-md">
                        <Field
                            id="auth-form-password"
                            className="text-sm text-purple-400 mr-3 bg-slate-800 flex-1 focus:outline-none"
                            type={isPassword ? "password" : "text"}
                            name="password"
                        />
                        {
                            isPassword ?
                                <i className="fa-solid fa-eye flex-none cursor-pointer text-purple-400" onClick={() => onHidePassword(false)}></i> :
                                <i className="fa-solid fa-eye-slash flex-none cursor-pointer text-purple-400" onClick={() => onHidePassword(true)}></i>
                        }
                    </div>
                    <ErrorMessage
                        name="password"
                        component="span"
                        className="text-sm text-red-400 text-center"
                    />
                </div>
                <button
                    type="submit"
                    className="border-2 transition px-2 py-1 border-purple-400 rounded-md font-bold text-purple-400 hover:bg-purple-400 hover:text-slate-800 focus:ring focus:ring-purple-400 focus:outline-none"
                >
                    Submit
                </button>
            </Form>
        </Formik >
    );
}

export default AuthenticationForm;
