import "./App.css";
import Input from "./Compnents/Input";

import UserContextProvider from "./userContextProvider";
import Welcome from "./Compnents/Welcome";
import Button from "./Compnents/Button";

function App() {
  return (
    <UserContextProvider>
      <Welcome />
      <Input />
      <Button />
    </UserContextProvider>
  );
}

export default App;
