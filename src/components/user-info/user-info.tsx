import { useCallback, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";

const UserInfo = () => {
    const { request } = useHttp();

    return (
        <>
            <span className="mr-2 font-bold text-purple-400 break-words">{"guest"}</span>
            <span>👋</span>
        </>
    );
}

export default UserInfo;
