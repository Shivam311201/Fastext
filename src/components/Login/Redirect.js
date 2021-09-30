import React, { useEffect, useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useLocation, useHistory } from "react-router-dom";
import clientIDs from "../../configFiles/clientID";
import { userContext } from "../../contexts/userContext";

export default function Redirect() {

  const Location = useLocation();
  const History = useHistory();
  const search = Location.search;
  const db = firebase.firestore();
  const auth = firebase.auth();
  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    (async () => {
      const responseCode = search.split("code=")[1].split("&")[0];
      const redirectURI = "http://localhost:3000/loginRedirect";
      const tokenURl = "https://oauth2.googleapis.com/token";
      const body = `code=${responseCode}&client_id=${clientIDs.webClientID}&client_secret=${clientIDs.webClientSecret}&redirect_uri=${redirectURI}&grant_type=authorization_code`;
      let response = await fetch(tokenURl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body
      });
      const { id_token, access_token } = await response.json();
      const { email, name } = JSON.parse(window.atob(id_token.split(".")[1]));
      let existingUser;
      const existingUserRef = await db.collection("users").where("email", "==", email).get();
      existingUserRef.forEach((snapshot) => existingUser = snapshot.data());
      const { user } = await auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(id_token, access_token));
      if (existingUser) {
        setUser(existingUser);
      } else {
        const data = {
          email,
          name,
          userID: user.uid
        };
        await db.collection("users").doc(user.uid).set(data);
        setUser(data);
      };
      History.push("/");
    })();
  }, []);

  return (
    <div>
      Please wait
    </div>
  );
}
