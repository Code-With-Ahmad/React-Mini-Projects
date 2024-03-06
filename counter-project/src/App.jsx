import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <h1>Counter Project</h1>
        <div className="val">
          <h1>{count}</h1>
        </div>
        <div className="buttons">
          <button className="inc" onClick={() => setCount(count + 1)}>
            <h2>Increment</h2>
          </button>
          <button
            className="dec"
            onClick={() => (count > 0 ? setCount(count - 1) : setCount(0))}
          >
            <h2>Decrement</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
