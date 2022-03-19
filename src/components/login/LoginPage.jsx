import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import { Button } from 'semantic-ui-react'

function LoginButton(){
    const { loginWithRedirect } = useAuth0();

    return <Button  onClick={() => loginWithRedirect()}>Log In</Button>;
}
function LoginPage() {
    return (
        <div style={{paddingTop:"100px"}}>
            <LoginButton/>
        </div>
    )
}
export default LoginPage;

