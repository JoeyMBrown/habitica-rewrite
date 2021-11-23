import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    console.log(user);
    return (
        <div>
            { isAuthenticated ? <div>
                <h1>{user.email}</h1>
                <h2>{user.name}</h2>
            </div> : <h1>Please Login</h1>}
        </div>
    )
}

export default Profile;