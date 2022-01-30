import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

    let navigate = useNavigate();
    const { isAuthenticated } = useAuth0();
    const [userLoaded, setUserLoaded] = useState(isAuthenticated);

    useEffect(() => {
        setUserLoaded(isAuthenticated)

        if(userLoaded) {
            navigate("/user");
        }
    }, [isAuthenticated, userLoaded])

    return (
        <div>
            <LoginButton />
            <LogoutButton />
        </div>
    )
}

export default LoginPage;