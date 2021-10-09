import React, { useContext, useState } from 'react';
import { userContext } from "../../contexts/userContext";

export default function Message({ sender, content }) {

  const [byUser, setByUser] = useState(false);
  const [user, setUser] = useContext(userContext);

  useEffect(() => {
    if (sender.email === user.email) setByUser(true);
  }, []);

  return (<>
    <div
      className={byUser ? "ByUser" : "NotByUser"}
    >{content?.body}</div>
  </>);
}
