import AppBtnBgLight from "../app-btn-bg-light/app-btn-bg-light";
import UserBtnExit from "../user-btn-exit/user-btn-exit";
import UserInfo from "../user-info/user-info";

const AppNavbar = () => {
    return (
        <div className="py-3.5 flex items-center justify-between">
            <h1 className="px-2 py-1 text-lg text-purple-400 font-bold rounded-md">
                    <span className="mr-2.5">Todo</span>
                    <i className="fa-solid fa-pen"></i>
            </h1>
            <div>
                <UserInfo />
            </div>
            <div>
                <AppBtnBgLight />
                <UserBtnExit />
            </div>
        </div>
    );
}

export default AppNavbar;