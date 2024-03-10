import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 0px", fontSize: "45px" }}>
        Hello My Name is {id}
      </h1>
    </div>
  );
};

export default User;
