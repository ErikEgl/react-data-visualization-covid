import React from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import ChartControls from "../ChartControls/ChartControls";
import { Tab, Tabs } from "react-bootstrap";
import BarChart from "../ChartTypes/BarChart";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function ChartBlock(props) {
  const { selectedCountry, selectedOptions, useWindowDimensions } = useContext(UserContext);
  const { covidData, countryKeys } = useContext(UserContext);
  const chartControlsData = {
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
  };
  return (
    <div className="chart-block">
      <CountrySelect />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={chartControlsData.name1.title} title={chartControlsData.name1.title}>
          {selectedCountry && selectedCountry}
          <br />
            {chartControlsData.name1.control_title === selectedOptions.ReportedCases1.value && <BarChart selectedInputOption={chartControlsData.name1.control_option_1} countryKeys={countryKeys} />}
            {chartControlsData.name2.control_title === selectedOptions.ReportedCases1.value && <BarChart selectedInputOption={chartControlsData.name2.control_option_1} countryKeys={countryKeys} />}
          <br />



          <div className="d-flex gap-2 flex-wrap justify-content-between">
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlsData.name1.name} //must be same same as same ChartControls name, so one input will be off other on 
                control={chartControlsData.name1.control_title}
              />
              <ChartControls
                name={chartControlsData.name2.name} //must be same same as same ChartControls name, so one input will be off other on 
                control={chartControlsData.name2.control_title}
              />
            </div>
            {/* <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlsData.name2.name} //must be same same as same ChartControls name, so one input will be off other on 
                control="Daily new values"
              />
              <ChartControls
                name={chartControlsData.name2.name} //must be same same as same ChartControls name, so one input will be off other on 
                control="Cumulative mode"
              />
            </div> */}
          </div>
        </Tab>



        <Tab eventKey={chartControlsData.name3.title} title={chartControlsData.name3.title}>
          {selectedCountry && selectedCountry}
          <br />
            {chartControlsData.name3.control_title === selectedOptions.RankedCharts1.value && <BarChart selectedInputOption={chartControlsData.name3.control_option_1} countryKeys={countryKeys} />}
            {chartControlsData.name4.control_title === selectedOptions.RankedCharts1.value && <BarChart selectedInputOption={chartControlsData.name4.control_option_1} countryKeys={countryKeys} />}
          <br />



          <div className="d-flex gap-2 flex-wrap justify-content-between">
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlsData.name3.name} //must be same same as same ChartControls name, so one input will be off other on 
                control={chartControlsData.name3.control_title}
              />
              <ChartControls
                name={chartControlsData.name4.name} //must be same same as same ChartControls name, so one input will be off other on 
                control={chartControlsData.name4.control_title}
              />
            </div>
            {/* <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlsData.name4.name}
                control="Countries to show 2"
              />
              <ChartControls
                name={chartControlsData.name4.name}
                control="Countries to show 3"
              />
            </div> */}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
export default ChartBlock;
