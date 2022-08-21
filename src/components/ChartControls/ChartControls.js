import React from "react";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";


function ChartControls(props) {
  const { selectedOptions, selectOptions } = useContext(UserContext);
  function handleChange(event) {
    const {value, name} = event.target
    selectOptions(value, name)
  }   
  
  // let keys = [];
  // for (let key in selectedOptions) {
  //     keys.push(key); // pushes each key into keys arrays
  // }
  // let data = keys.map(key => selectedOptions[key])
  //
  return (
    <>
     <input 
     type="radio"
     id={props.control} //input label
     name={props.name} //tab name
     value={props.control} //input label
     checked={selectedOptions.RankedCharts.value === props.control || selectedOptions.ReportedCases.value === props.control}
     onChange={handleChange}
    />

    
    <label htmlFor={props.control}>{props.control}</label>
    <br />
    </>
  );
}
export default ChartControls;
