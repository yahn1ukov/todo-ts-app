import { useContext, useEffect } from "react";
import { useAppDispatch } from "../../hooks/dispatch.hook";
import { useHttp } from "../../hooks/http.hook";
import { useAppSelector } from "../../hooks/selector.hook";
import { fetchUser } from '../../actions/user.action';
import AuthenticationContext from "../../context/auth.context";

const UserInfo = () => {
    const { request } = useHttp();
    const dispatch = useAppDispatch();
    const { user } = useAppSelector(state => state.users);
    const { token } = useContext(AuthenticationContext);

    useEffect(() => {
        dispatch(fetchUser(request, token!))
    }, [dispatch, request, token])

    return (
        <>
            <span className="mr-2 font-bold text-purple-400 break-words">{user?.username ?? "guest"}</span>
            <span>👋</span>
        </>
    );
}

export default UserInfo;
