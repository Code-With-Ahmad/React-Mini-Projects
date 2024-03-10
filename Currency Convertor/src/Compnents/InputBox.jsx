import React from "react";
import AllCurrencies from "./AllCurrencies";
function InputBox({
  label,
  select,
  onSelectChange,
  input,
  onInputChange,
  disabled,
}) {
  const handleSelectChange = (e) => {
    onSelectChange(e.target.value);
  };
  const handleInputChange = (e) => {
    onInputChange(Number(e.target.value));
  };
  return (
    <div className="Input-Box-Container">
      <div className="input-value">
        <label htmlFor={label}>{label}</label>
        <input
          type="number"
          id={label}
          value={input}
          onChange={handleInputChange}
          disabled={disabled}
        />
      </div>
      <div className="select-currency">
        <label htmlFor="">Type</label>
        <select name="" id="" value={select} onChange={handleSelectChange}>
          {AllCurrencies.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
