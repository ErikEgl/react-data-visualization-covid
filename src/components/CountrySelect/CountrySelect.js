import { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { Form } from 'react-bootstrap';
import CountryOptionItem from '../CountryOptionItem/CountryOptionItem'
function CountrySelect() {
  const { countryKeys, selectCountry, selectedCountry, covidData } = useContext(UserContext);



  const items = countryKeys.map(key => {
    return (
      <CountryOptionItem id={key} key={key} location={covidData[key].location}/>
    )
  })
  function handleChange(event) {
    selectCountry(event.target.value)
  }
  return (
    <>
        <form className="my-3">
          <Form.Select 
              id="countrySelect"
              onChange={handleChange}
              name="countrySelect"
          >
              <option value="EST">-- Choose --</option>
              {items}
          </Form.Select>
        </form>
    </>
  );
}
export default CountrySelect;
