/* eslint-disable no-empty-pattern */
// import { useState, useEffect } from "react";

// export const NumberOfEvents = ({ setCurrentNOE }) => {
//   const [number, setNumber] = useState(32);

//   useEffect(() => {
//     setNumber();
//   }, []);

//   const handleInputChanged = (event) => {
//     const value = event.target.value;
//     setCurrentNOE(value);
//   }

export const NumberOfEvents = ({ setCurrentNOE }) => {
  const handleInputChanged = (event) => {
      const value = event.target.value
      setCurrentNOE(value)
  }

//   return (
//     <div id="number-of-events">
//       <label htmlFor="number-of-events-input">
//         Number of Events: 
//       </label>
//       <input
//         type="text"
//         id="number-of-events-input"
//         className="number-of-events-input"
//         defaultValue={32}
//         // value={number}
//         onChange={handleInputChanged}
//       />
//     </div>
//   );
// }

return (
  <div 
      id="number-of-events-input"      
  >
      <label>
          Number of events:
      </label> 
      <input  
          defaultValue={32} 
          onChange={handleInputChanged}
          className="number-of-events-input"
      >
      </input>
  </div>
)
}
export default NumberOfEvents;