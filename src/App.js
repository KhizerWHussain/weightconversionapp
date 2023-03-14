import React, { useState } from 'react';
import "./styles/styles.css";
import "./styles/media.css";

const App = () => {
  const weightunits = ["Kilogram", "Gram", "Milligram", "Microgram", "Imperial ton", "US ton", "Tonne", "Stone", "Pound", "Ounce"];
  const [selectedUnit, setSelectedUnit] = useState("Kilogram");
  const [secondSelectedUnit, setSecondSelectedUnit] = useState("Gram");
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (event) => {
    const userinput = event.target.value;
    setInputValue(userinput);
  }

  const convertWeight = (value, fromUnit, toUnit) => {
    const units = {
      Kilogram: 1000,
      Gram: 1,
      Milligram: 0.001,
      Microgram: 0.000001,
      "Imperial ton": 1016046.91,
      "US ton": 907184.74,
      Tonne: 1000000,
      Stone: 6350.29,
      Pound: 453.592,
      Ounce: 28.3495
    }
    const fromValue = value * units[fromUnit];
    const toValue = fromValue / units[toUnit];
    return toValue;
  }

  const convertedweight = convertWeight(inputValue, selectedUnit, secondSelectedUnit);

  return (
    <div className='main'>
      <div className='container'>
        <h1 id='heading'>Weight Converter App</h1>
        <div className='units'>
          <select name="unit" id="unit" className='measure'
            value={selectedUnit} onChange={(e) => setSelectedUnit(e.target.value)}>
            {
              weightunits.map((mass) => (
                <option value={mass}>{mass}</option>
              ))
            }
          </select>
          <select name="convertedunit" id="convertedunit" className='measure'
            value={secondSelectedUnit} onChange={(e) => setSecondSelectedUnit(e.target.value)}>
            {
              weightunits.map((mass) => (
                <option value={mass}>{mass}</option>
              ))
            }
          </select>
        </div>
        <div className='input-result'>
          <input type="number" id='mass' name='mass' className='mass'
            value={inputValue} onChange={handleInputChange} />
          <p className='result'><span>{convertedweight}</span></p>
        </div>
      </div>
    </div>
  )
}

export default App
