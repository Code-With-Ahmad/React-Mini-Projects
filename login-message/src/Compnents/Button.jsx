import React, { useContext } from "react";
import userContext from "../UserContext";

const Button = () => {
  const { user, setUser } = useContext(userContext);
  function logout() {
    setUser(null);
  }
  if (!user) {
    return;
  } else {
    return <button onClick={logout}>Logout</button>;
  }
};
export default Button;
