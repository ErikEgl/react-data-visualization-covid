import { useState, createContext, useEffect } from "react";

const UserContext = createContext();

function AppContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const [chartControlsData, setChartControlsData] = useState({
    name1: {
      name: "ReportedCases1",
      title: "Reported cases",
      control_title: "Death count",
      control_option_1: "new_deaths",
      control_option_2: "total_deaths_per_million",
    },
    name2: {
      name: "ReportedCases1",
      title: "Reported cases",
      control_title: "Confirmed cases",
      control_option_1: "new_cases",
      control_option_2: "total_cases_per_million",

    },
    name3: {
      name: "RankedCharts1",
      title: "Ranked charts",
      control_title: "Total number of deaths",
      control_option_1: "total_deaths",
    },
    name4: {
      name: "RankedCharts1",
      title: "Ranked charts",
      control_title: "Total number of cases",
      control_option_1: "total_cases",
    },
    name5: {
      name: "ReportedCases2",
      title: "Reported cases",
      control_title: "",
      control_option_1: "",
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

  function getCovidData(data) {
    setCovidData(data)
  }
  function getIsLoading(loadingStatus) {
    setIsLoading(loadingStatus)
  }

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
        chartControlsData,
        isLoading,
        getCovidData,
        getIsLoading,
        setIsLoading,
        setCovidData
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };
