import React, { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./Compnents/InputBox";

const App = () => {
  const [to, setTo] = useState("To");
  const [from, setFrom] = useState("From");
  const [selectTo, setSelectTo] = useState("USD");
  const [selectFrom, setSelectFrom] = useState("PKR");
  const [inputTo, setInputTo] = useState(0);
  const [inputFrom, setInputFrom] = useState(0);

  const currencyInfo = useCurrencyInfo(selectTo.toLowerCase());

  const handleToChange = (newValue) => {
    setSelectTo(newValue);
  };

  const handleFromChange = (newValue) => {
    setSelectFrom(newValue);
  };
  function handleFromInput(newValue) {
    if (newValue < 0) {
      setInputFrom(0);
    } else {
      setInputFrom(newValue);
    }
  }
  function handleToInput(newValue) {
    if (newValue < 0) {
      setInputTo(0);
    } else {
      setInputTo(newValue);
    }
  }

  function result() {
    let input = inputTo;
    let res = currencyInfo[selectFrom.toLowerCase()];
    let result = input * res;
    if (result == 0) {
      setInputFrom(0);
    } else {
      setInputFrom(result.toFixed(4));
    }
  }
  return (
    <div className="container">
      <h1>Currency Convertor :</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <InputBox
          label={from}
          select={selectTo}
          onSelectChange={handleToChange}
          input={inputTo}
          onInputChange={handleToInput}
          disabled={""}
        />

        <InputBox
          label={to}
          select={selectFrom}
          onSelectChange={handleFromChange}
          input={inputFrom}
          onInputChange={handleFromInput}
          disabled={"true"}
        />
        <button onClick={result}>
          Convert {selectTo} To {selectFrom}
        </button>
      </form>
    </div>
  );
};

export default App;
