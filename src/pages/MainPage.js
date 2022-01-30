import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../components/LogoutButton";
import Profile from "../components/Profile";

const MainPage = () => {
    const { user, isAuthenticated } = useAuth0();
    
    return (
        <div>
            {isAuthenticated ? <Profile /> : null}
        </div>
    )
}

export default MainPage;