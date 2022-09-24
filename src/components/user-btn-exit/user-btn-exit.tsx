import { useContext } from "react";
import AuthContext from "../../context/auth.context";

const UserBtnExit = () => {
const { logout } = useContext(AuthContext);

    return (
        <button
            title="Exit"
            type="button"
            onClick={logout}
            className="border-2 transition border-red-600 text-red-600 rounded-md py-1 px-[7px] hover:bg-red-600 hover:text-slate-800 focus:ring focus:ring-red-600 focus:outline-none"
        >
            <i className="fa-solid fa-door-open"></i>
        </button>
    );
}

export default UserBtnExit;