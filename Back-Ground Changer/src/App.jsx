import Color from "./Components/Color";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Color color="red" />
      <Color color="green" />
      <Color color="blue" />
      <Color color="orange" />
      <Color color="purple" />
      <Color color="grey" />
    </div>
  );
};

export default App;
