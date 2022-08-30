import React from "react";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";


function CountryOptionItem(props) {
  const { selectCountry, selectedCountry } = useContext(UserContext);
  return (
    <>
      <option id={props.id} value={props.id}>{props.location}</option>
    </>
  );
}
export default CountryOptionItem;
