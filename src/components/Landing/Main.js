import React, { useEffect, useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "../../configFiles/config";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { userContext } from "../../contexts/userContext";
import Register from "../Login/Register";
import Redirect from "../Login/Redirect";
import Messenger from "../Messenger/Messenger";

export default function Main() {

  if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();

  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    auth.onAuthStateChanged(async (signedInUser) => {
      if (signedInUser) {
        const existingUser = await db.collection("users").doc(signedInUser.uid).get();
        setUser(existingUser.data());
      };
    });
  }, []);

  if (!user.name) return (<>
    <Router>
      <Switch>
        <Route
          // Login route
          exact={true}
          path="/"
          children={() => <>
            <Register />
          </>}
        />
        <Route
          // Redirect route
          exact={false}
          path="/loginRedirect"
          children={() => <>
            <Redirect />
          </>}
        />
      </Switch>
    </Router>
  </>);

  if (user.name) return (<>
    <Messenger />
  </>);
};
