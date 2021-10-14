import React, { useContext, useState, useEffect } from 'react';
import { userContext } from "../../contexts/userContext";

export default function Message({ sender, content }) {

  console.log(sender);
  // const [byUser, setByUser] = useState(false);
  const [user, setUser] = useContext(userContext);

  // useEffect(() => {
  //   if (sender == user.userName) setByUser(true);
  // }, []);

  if (sender == user.userName) return (<div className="MessageContainer">
    <div className="ByUser">{content}</div>
  </div>);

  return (<div className="MessageContainer">
    <div className="ByContact">{content}</div>
  </div>);
}
