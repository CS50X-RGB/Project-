import React, {useState, useEffect} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';

export default function Login(){
    useEffect(() => {
        function start() {
          gapi.client.init({
            clientId: "642854276096-km1dtb70jhgt93l0ntrl8h4cgq07r0ju.apps.googleusercontent.com",
            scope: 'email',
          });
        }

        gapi.load('client:auth2', start);
      }, []);
    const clientId ="642854276096-km1dtb70jhgt93l0ntrl8h4cgq07r0ju.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [showLogoutButton, setShowLogoutButton] = useState(false);

    const onLoginSuccess = (res) =>{
        console.log('Login Success', res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSuccess = (res) =>{
        console.log('Login Failed:', res);
    }

    const onSignoutSuccess = () => {
        alert('You have been siged out succesfully');
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }

    return (
        <div>
            {showLoginButton ? 
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onLoginSuccess}
                onFailure={onFailureSuccess}
                cookiePolicy={'single_host_origin'}
            /> : null
            }

            {showLogoutButton ?    
            <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }

        </div>
    )
}