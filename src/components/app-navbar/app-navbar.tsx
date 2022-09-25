import { useContext } from "react";
import AuthContext from "../../context/auth.context";
import AppBtnBgLight from "../app-btn-bg-light/app-btn-bg-light";
import UserBtnExit from "../user-btn-exit/user-btn-exit";
import UserInfo from "../user-info/user-info";

const AppNavbar = () => {
    const { isAuth } = useContext(AuthContext);
    
    return (
        <div className="py-3.5 flex items-center justify-between">
            <h1 className="text-lg text-purple-400 font-bold rounded-md">
                    <span className="mr-2.5">Todo</span>
                    <i className="fa-solid fa-pen"></i>
            </h1>
            {
                isAuth && 
                <div>
                    <UserInfo />
                </div>
            }
            <div>
                <AppBtnBgLight isAuth={isAuth} />
                {
                    isAuth && <UserBtnExit />
                } 
            </div>
        </div>
    );
}

export default AppNavbar;