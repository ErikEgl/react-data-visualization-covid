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
    <div className="d-flex flex-column gap-1 justify-content-center form-check form-switch p-0 m-0 border border-5 p-3">
        <input 
        className="form-check-input m-0 p-0"
        type="radio"
        id={props.control} //input label
        name={props.name} //tab name
        value={props.control} //input label
        checked={
          selectedOptions.RankedCharts1.value === props.control ||
          selectedOptions.RankedCharts2.value === props.control ||
          selectedOptions.ReportedCases1.value === props.control ||
          selectedOptions.ReportedCases2.value === props.control
        }
        onChange={handleChange}
        />
        <label className="form-check-label m-0 p-0" htmlFor={props.control}>{props.control}</label>
     </div>
    </>
  );
}
export default ChartControls;
