import { Route, Routes } from "react-router-dom";
import { AuthenticationPage } from "../pages/authentication-page";
import { TodoPage } from "../pages/todo-page";

export const useRoutes = (isAuth) => (
    <Routes>
        <Route path="/" element={isAuth ? <TodoPage /> : <AuthenticationPage />}/>
    </Routes>
);