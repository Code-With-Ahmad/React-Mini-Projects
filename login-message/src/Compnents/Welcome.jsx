import React, { useContext } from "react";
import userContext from "../UserContext";

const Welcome = () => {
  const { user } = useContext(userContext);
  if (!user) {
    return <h1>Please Login</h1>;
  } else {
    return <h1> Welcome {user} </h1>;
  }
};

export default Welcome;
