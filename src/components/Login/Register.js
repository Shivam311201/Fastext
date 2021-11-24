import React from 'react';
import clientIDs from "../../configFiles/clientID";
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';

export default function Register() {

  async function googleSignIn() {
    const redirectURI = "http://localhost:3000/loginRedirect";
    const scope = "email%20profile";
    const oAuthURI = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirectURI}&access_type=offline&client_id=${clientIDs.webClientID}`;
    window.location = oAuthURI;
  };

  return (
<div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Fastext!</h2>
        <div
          className='login-button google'
          onClick={() => {googleSignIn()}}
        >
          <GoogleOutlined /> Sign In with Google
        </div>
      </div>
    </div>
  );
}
