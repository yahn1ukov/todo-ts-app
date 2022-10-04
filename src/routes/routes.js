import { Route, Routes } from "react-router-dom";
import { AuthPage } from "../pages/auth.page";
import { TodoPage } from "../pages/todo.page";

export const useRoutes = (isAuth) => (
    <Routes>
        <Route path="/" element={isAuth ? <TodoPage /> : <AuthPage />} />
    </Routes>
);
