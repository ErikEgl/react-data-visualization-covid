import React from "react";

import { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from "react-chartjs-2";

function BarChart({ countryKeys, selectedInputOption }) {
  const { selectedOptions, covidData, selectedCountry } = useContext(UserContext);
  function getSelectedCountry() {
    if (!Object.keys(covidData).length) return;
    return countryKeys.filter((key) => selectedCountry === key);
  }
  console.log(selectedOptions);
  const key = getSelectedCountry();

  const [userData, setUserData] = React.useState({})


console.log(selectedInputOption);

  let labels = [];
  let datasetData = [];
  let conditionLabel = null
  function getUserData(condition) {
    conditionLabel = condition
    for(let i = 0; i < Object.keys(covidData[key].data).length; i++) {
      labels.push(covidData[key].data[i].date)
      console.log(condition === "total_cases");
      if(condition === "total_cases") {
        datasetData.push(covidData[key].data[i].total_cases)
      } else if(condition === "new_deaths") {
        datasetData.push(covidData[key].data[i].new_deaths)
      } else if(condition === "total_deaths_per_million") {
        datasetData.push(covidData[key].data[i].total_deaths_per_million)
      } else if(condition === "new_cases") {
        datasetData.push(covidData[key].data[i].new_cases)
      } else if(condition === "total_cases_per_million") {
        datasetData.push(covidData[key].data[i].total_cases_per_million)
      } else if(condition === "total_deaths") {
        datasetData.push(covidData[key].data[i].total_deaths)
      }
    }
  }



  React.useEffect(() => {
    if(key) {
      getUserData(selectedInputOption)
      setUserData(prevData => {
        return(
          {
            ...prevData,
            labels: labels,
            datasets: [{
              label: conditionLabel,
              data: datasetData,
              backgroundColor: ["#6f88fe"], 
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
