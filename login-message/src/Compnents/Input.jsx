import React, { useContext, useState } from "react";
import userContext from "../UserContext";

const Input = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const { setUser } = useContext(userContext);
  function submitForm(e) {
    e.preventDefault();
    setUser(name);
  }
  return (
    <div className="form-container">
      <form>
        <div className="input-name-container">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-password-container">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            name="password"
            id="pass"
            placeholder="Enter Your Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
        </div>
        <div className="submit">
          <input type="submit" value="Submit Form" onClick={submitForm} />
        </div>
      </form>
    </div>
  );
};

export default Input;
