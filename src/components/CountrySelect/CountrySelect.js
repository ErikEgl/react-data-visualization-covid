import { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { Form } from 'react-bootstrap';
import CountryOptionItem from '../CountryOptionItem/CountryOptionItem'
function CountrySelect() {
  const { selectCountry, selectedCountry, covidData } = useContext(UserContext);


  let keys = [];
  for (let key in covidData) {
      keys.push(key); // pushes each key into keys arrays
  }
  const items = keys.map(key => <CountryOptionItem key={key} location={covidData[key].location}/>)

  function handleChange(event) {
    const {name, value} = event.target
    selectCountry({[name]: value})
}
  return (
    <>
        <form>
          <Form.Select 
              id="countrySelect"
              value={selectedCountry.length ? selectedCountry : ""}
              onChange={handleChange}
              name="countrySelect"
          >
              <option value="">-- Choose --</option>
              {items}
          </Form.Select>
        </form>
    </>
  );
}
export default CountrySelect;
