import "./App.css";

import ThemeContextProvider from "./Context/ThemeContextProvider";
import Card from "./Components/Card";

function App() {
  return (
    <ThemeContextProvider>
      <Card />
    </ThemeContextProvider>
  );
}

export default App;
