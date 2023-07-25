/* eslint-disable no-empty-pattern */
import { useState, useEffect } from "react";

const NumberOfEvents = () => {

  const [number, setNumber] = useState(32);

  useEffect(() => {
    setNumber();
  }, []);

  const handleInputChanged = (event) => {
    const value = event.target.value;
    setNumber(value);
  }

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events: </label>
      <input
        type="text"
        id="number-of-events-input"
        className="number-of-events-input"
        value={number}
        onChange={handleInputChanged}
      />
    </div>
  );
}

export default NumberOfEvents;