import React from 'react';
import clientIDs from "../../configFiles/clientID";

export default function Register() {

  async function googleSignIn() {
    const redirectURI = "http://localhost:3000/loginRedirect";
    const scope = "email%20profile";
    const oAuthURI = `https://accounts.google.com/o/oauth2/v2/auth?scope=${scope}&response_type=code&redirect_uri=${redirectURI}&access_type=offline&client_id=${clientIDs.webClientID}`;
    window.location = oAuthURI;
  };

  return (
    <div>
      <button onClick={() => googleSignIn()} >
        <div>Sign in with Google</div>
      </button>
    </div>
  );
}
