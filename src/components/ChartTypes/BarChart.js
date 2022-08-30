import React from "react";

import { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

function BarChart({ countryKeys }) {
  const { covidData, selectedCountry } = useContext(UserContext);
  function getSelectedCountry() {
    if (!Object.keys(covidData).length) return;
    return countryKeys.filter((key) => selectedCountry === key);
  }
  const key = getSelectedCountry();

  const [userData, setUserData] = React.useState({})


  React.useEffect(() => {
    if(key) {
      for(let i = 0; i < Object.keys(covidData[key].data[0]).length; i++) {
        setUserData({
          labels: covidData[key].data[0][i].date,
          datasets: [{
            label: 'users gained',
            data: covidData[key].data[0][i].new_cases
          }],
        }) 
      }
    }
  }, [selectedCountry])
  console.log(userData);
  // console.log(Object.keys(covidData));

  return (
      <div>
        {key}
        {Object.keys(userData).length && 123}
        
      </div>
  )
}

export default BarChart;
