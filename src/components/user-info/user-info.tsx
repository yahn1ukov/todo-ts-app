import { useCallback, useContext, useEffect, useState } from "react";
import AuthContext from "../../context/auth.context";
import { useHttp } from "../../hooks/http.hook";
import { UserResponse } from "../../types/response";

const UserInfo = () => {
    const { token } = useContext(AuthContext);
    const { request } = useHttp();
    const [user, setUser] = useState<UserResponse | null>(null);

    const getUser = useCallback(async () => {
        try {
            return await request("https://localhost:7066/api/users", "GET", null, {
                Authorization: `Bearer ${token}`
            });
        } catch (e) { }
    }, [request, token]);

    useEffect(() => {
        getUser()
            .then((returnedUser: UserResponse | null) => setUser(returnedUser))
    }, [getUser]);

    return (
        <>
            <span className="mr-2 font-bold text-purple-400 break-words">{user?.username ?? "guest"}</span>
            <span>👋</span>
        </>
    );
}

export default UserInfo;
