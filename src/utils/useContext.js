import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

function AppContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const [selectedCountry, setSelectedCountry] = useState("EST");
  const [selectedOptions, setSelectedOptions] = useState({
    ReportedCases1: {
      value: "",
    },
    ReportedCases2: {
      value: "",
    },
    RankedCharts1: {
      value: "",
    },
    RankedCharts2: {
      value: "",
    },
  });

  function changeMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function selectCountry(country) {
    setSelectedCountry(country);
  }

  function selectOptions(value, name) {
    setSelectedOptions((prevOptions) => {
      return {
        ...prevOptions,
        [name]: {
          name: name, //   name: "Reported cases"  tab name
          value: value, //   value: "Confirmed cases" input label name
        },
      };
    });
  }

  const [covidData, setCovidData] = useState([]);
  // let API_URL = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
  useEffect(() => {
    // fetch(API_URL)
    // .then((response) => response.json())
    // .then((data) => setCovidData(data));

    setCovidData({
      ABW: {
        aged_65_older: 13.085,
        aged_70_older: 7.452,
        continent: "North America 1",
        data: [
          {
            date: "2020-03-13",
            new_deaths: 0,
            total_deaths: 3410,
            total_deaths_per_million: 291.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 11.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 2,
            new_cases: 2,
            total_cases_per_million: 18.773,
            new_cases_per_million: 18.773,
          },
          {
            date: "2020-03-14",
            new_deaths: 0,
            total_deaths: 3240,
            total_deaths_per_million: 271.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.97,
            total_cases: 2,
            new_cases: 7,
            total_cases_per_million: 18.773,
            new_cases_per_million: 0,
          },
          {
            date: "2020-03-15",
            new_deaths: 0,
            total_deaths: 3240,
            total_deaths_per_million: 271.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 11.571,
            new_deaths_smoothed_per_million: 0.97,
            total_cases: 2,
            new_cases: 8,
            total_cases_per_million: 18.773,
            new_cases_per_million: 0,
          },
          {
            date: "2020-03-16",
            new_deaths: 0,
            total_deaths: 3210,
            total_deaths_per_million: 791.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 2,
            new_cases: 2,
            total_cases_per_million: 18.773,
            new_cases_per_million: 0,
          },
          {
            date: "2020-03-17",
            new_deaths: 0,
            total_deaths: 3210,
            total_deaths_per_million: 291.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.99,
            total_cases: 3,
            new_cases: 1,
            total_cases_per_million: 28.159,
            new_cases_per_million: 9.386,
          },
          {
            date: "2020-03-18",
            new_deaths: 0,
            total_deaths: 3240,
            total_deaths_per_million: 291.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.99,
            total_cases: 4,
            new_cases: 1,
            new_cases_smoothed: 0.571,
            total_cases_per_million: 37.546,
          },
          {
            date: "2020-03-19",
            new_deaths: 0,
            total_deaths: 3410,
            total_deaths_per_million: 791.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 4,
            new_cases: 3,
            new_cases_smoothed: 0.571,
            total_cases_per_million: 37.546,
          },
        ],
        diabetes_prevalence: 11.62,
        gdp_per_capita: 35973.781,
        life_expectancy: 76.29,
        location: "Aruba",
        median_age: 41.2,
        population: 106536,
        population_density: 584.8,
      },
      EST: {
        aged_65_older: 10.085,
        aged_70_older: 6.452,
        continent: "North America 2",
        data: [
          {
            date: "2020-03-13",
            new_deaths: 0,
            total_deaths: 340,
            total_deaths_per_million: 1.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 3,
            new_cases: 2,
            total_cases_per_million: 18.773,
            new_cases_per_million: 18.773,
          },
          {
            date: "2020-03-14",
            new_deaths: 0,
            total_deaths: 410,
            total_deaths_per_million: 291.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 11.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 4,
            new_cases: 10,
            total_cases_per_million: 18.773,
            new_cases_per_million: 0,
          },
          {
            date: "2020-03-15",
            new_deaths: 0,
            total_deaths: 320,
            total_deaths_per_million: 2791.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 5,
            new_cases: 10,
            total_cases_per_million: 18.773,
            new_cases_per_million: 0,
          },
          {
            date: "2020-03-16",
            new_deaths: 0,
            total_deaths: 410,
            total_deaths_per_million: 271.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 11.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 6,
            new_cases: 10,
            total_cases_per_million: 18.773,
            new_cases_per_million: 0,
          },
          {
            date: "2020-03-17",
            new_deaths: 0,
            total_deaths: 32,
            total_deaths_per_million: 91.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 7,
            new_cases: 11,
            total_cases_per_million: 28.159,
            new_cases_per_million: 9.386,
          },
          {
            date: "2020-03-18",
            new_deaths: 0,
            total_deaths: 10,
            total_deaths_per_million: 2791.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 11.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 8,
            new_cases: 11,
            new_cases_smoothed: 0.571,
            total_cases_per_million: 37.546,
          },
          {
            date: "2020-03-19",
            new_deaths: 0,
            total_deaths: 340,
            total_deaths_per_million: 291.218,
            new_deaths_per_million: 0,
            new_deaths_smoothed: 1.571,
            new_deaths_smoothed_per_million: 0.997,
            total_cases: 9,
            new_cases: 10,
            new_cases_smoothed: 0.571,
            total_cases_per_million: 37.546,
          },
        ],
        diabetes_prevalence: 11.62,
        gdp_per_capita: 5973.781,
        life_expectancy: 66.29,
        location: "Estonia",
        median_age: 51.2,
        population: 16536,
        population_density: 84.8,
      },
    });
  }, []);

  let countryKeys = [];
  for (let key in covidData) {
    countryKeys.push(key); // pushes each key into keys arrays
  }

  if (isDarkMode) {
    document.querySelector("html").classList.add("bootstrap-dark");
    document.querySelector("html").classList.remove("bootstrap");
  } else {
    document.querySelector("html").classList.add("bootstrap");
    document.querySelector("html").classList.remove("bootstrap-dark");
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  return (
    <UserContext.Provider
      value={{
        isDarkMode,
        changeMode,
        covidData,
        selectedCountry,
        selectCountry,
        selectedOptions,
        selectOptions,
        useWindowDimensions,
        countryKeys,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };
