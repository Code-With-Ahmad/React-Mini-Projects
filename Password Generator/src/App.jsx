import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
const App = () => {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  let generateRandomPassword = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) {
      string += "0123456789";
    }
    if (symbolAllowed) {
      string += `~!@#$%^&*()-_+={}[]"'|\/?<>?:;,.`;
    }

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * string.length - 1 + 1);
      password += string[random];
    }
    setPassword(password);
  }, [length, symbolAllowed, NumberAllowed, setPassword]);

  useEffect(() => {
    generateRandomPassword();
  }, [length, symbolAllowed, NumberAllowed, setPassword]);
  const btnRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    btnRef.current?.select();

    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div>
      <div className="container">
        <h1>Random Password Generator</h1>
        <div className="password-Container">
          <input type="text" readOnly value={password} ref={btnRef} />
          <button onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className="password-strength">
          <input
            type="range"
            name="range"
            id="range"
            min="0"
            max="20"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length : {length}</label>
          <input
            type="checkbox"
            name="Numbers"
            id="Numbers"
            defaultChecked={NumberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          Numbers
          <input
            type="checkbox"
            name="Symbols"
            id="Symbols"
            onChange={() => {
              setSymbolAllowed((prev) => !prev);
            }}
          />{" "}
          Symbols
        </div>
      </div>
    </div>
  );
};

export default App;
