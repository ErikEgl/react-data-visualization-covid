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




  let labels = [];
  let datasetData = [];
  let conditionLabel = null
  function getUserData(condition) {
    conditionLabel = condition
    for(let i = 0; i < Object.keys(covidData[key].data).length; i++) {
      labels.push(covidData[key].data[i].date)
      datasetData.push(covidData[key].data[i].new_cases)
    }
  }

  React.useEffect(() => {
    if(key) {
      getUserData()
      setUserData(prevData => {
        return(
          {
            ...prevData,
            labels: labels,
            datasets: [{
              label: conditionLabel,
              data: datasetData
            }],
          }
        )
      })
    }
  }, [selectedCountry])

  console.log(covidData);
  return (
      <div>
        {key}
        {Object.keys(userData).length && <Bar data={userData}/>}
      </div>
  )
}

export default BarChart;
