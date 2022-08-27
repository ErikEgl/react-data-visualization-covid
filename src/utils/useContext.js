import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

function AppContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState({countrySelect: 'Estonia'})
  const [selectedOptions , setSelectedOptions] = useState({
    ReportedCases1: {
      value: ''
    },
    ReportedCases2: {
      value: ''
    },
    RankedCharts1: {
      value: ''
    },
    RankedCharts2: {
      value: ''
    },
  })
  function changeMode() {
    setIsDarkMode(prevMode => !prevMode)
  }
  function selectCountry(country) {
    setSelectedCountry(country)
  }
  function selectOptions(value, name) {
    setSelectedOptions(prevOptions => {
      return ({
        ...prevOptions, 
        [name]: {
          name: name, //   name: "Reported cases"  tab name
          value: value //   value: "Confirmed cases" input label name
        }
      })
    })
  }



const [covidData, setCovidData] = useState();
  useEffect(() => {
    setCovidData({
      ABW: {
        aged_65_older: 13.085,
        aged_70_older: 7.452,
        continent: "North America 1",
        data: [{0: {date: '2020-03-13', total_cases: 2, new_cases: 2, total_cases_per_million: 18.773, new_cases_per_million: 18.773},
                1: {date: '2020-03-14', total_cases: 2, new_cases: 0, total_cases_per_million: 18.773, new_cases_per_million: 0},
                2: {date: '2020-03-15', total_cases: 2, new_cases: 0, total_cases_per_million: 18.773, new_cases_per_million: 0},
                3: {date: '2020-03-16', total_cases: 2, new_cases: 0, total_cases_per_million: 18.773, new_cases_per_million: 0},
                4: {date: '2020-03-17', total_cases: 3, new_cases: 1, total_cases_per_million: 28.159, new_cases_per_million: 9.386},
                5: {date: '2020-03-18', total_cases: 4, new_cases: 1, new_cases_smoothed: 0.571, total_cases_per_million: 37.546},
                6: {date: '2020-03-19', total_cases: 4, new_cases: 0, new_cases_smoothed: 0.571, total_cases_per_million: 37.546}}],
        diabetes_prevalence: 11.62,
        gdp_per_capita: 35973.781,
        life_expectancy: 76.29,
        location: "Aruba",
        median_age: 41.2,
        population: 106536,
        population_density: 584.8
      },
      EST: {
        aged_65_older: 10.085,
        aged_70_older: 6.452,
        continent: "North America 2",
        data: [{0: {date: '2020-03-13', total_cases: 2, new_cases: 2, total_cases_per_million: 18.773, new_cases_per_million: 18.773},
                1: {date: '2020-03-14', total_cases: 2, new_cases: 0, total_cases_per_million: 18.773, new_cases_per_million: 0},
                2: {date: '2020-03-15', total_cases: 2, new_cases: 0, total_cases_per_million: 18.773, new_cases_per_million: 0},
                3: {date: '2020-03-16', total_cases: 2, new_cases: 0, total_cases_per_million: 18.773, new_cases_per_million: 0},
                4: {date: '2020-03-17', total_cases: 3, new_cases: 1, total_cases_per_million: 28.159, new_cases_per_million: 9.386},
                5: {date: '2020-03-18', total_cases: 4, new_cases: 1, new_cases_smoothed: 0.571, total_cases_per_million: 37.546},
                6: {date: '2020-03-19', total_cases: 4, new_cases: 0, new_cases_smoothed: 0.571, total_cases_per_million: 37.546}}],
        diabetes_prevalence: 11.62,
        gdp_per_capita: 5973.781,
        life_expectancy: 66.29,
        location: "Estonia",
        median_age: 51.2,
        population: 16536,
        population_density: 84.8
      }
      })
  }, [])

  if (isDarkMode) {
    document.querySelector('html').classList.add("bootstrap-dark")
    document.querySelector('html').classList.remove("bootstrap")
  } else {
    document.querySelector('html').classList.add("bootstrap")
    document.querySelector('html').classList.remove("bootstrap-dark")
  }

  return (
    <UserContext.Provider value={{
      isDarkMode, 
      changeMode, 
      covidData, 
      selectedCountry, 
      selectCountry, 
      selectedOptions,
      selectOptions
      }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };