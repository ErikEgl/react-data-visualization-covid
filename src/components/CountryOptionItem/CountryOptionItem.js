import React from "react";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";


function CountryOptionItem(props) {
  const { selectCountry } = useContext(UserContext);
  return (
    <>
      <option value={props.location}>{props.location}</option>
    </>
  );
}
export default CountryOptionItem;
