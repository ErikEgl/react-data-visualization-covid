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
  const chartControlNames = {
    name1: "ReportedCases1",
    name2: "ReportedCases2",
    name3: "RankedCharts1",
    name4: "RankedCharts2",
  };
  return (
    <div className="chart-block">
      <CountrySelect />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={chartControlNames.name1} title={chartControlNames.name1}>
          {selectedCountry && selectedCountry}
          <br />
          <h1>
            Line chart{" "}
            {chartControlNames.name1 === selectedOptions.ReportedCases1.name &&
              selectedOptions.ReportedCases1.value}
          </h1>
          <br />
          <h1>
            Line chart{" "}
            {chartControlNames.name2 === selectedOptions.ReportedCases2.name &&
              selectedOptions.ReportedCases2.value}
          </h1>
          <br />
          <div className="d-flex gap-2 flex-wrap justify-content-between">
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlNames.name1}
                control="Death count new_deaths or total_deaths_per_million"
              />
              <ChartControls
                name={chartControlNames.name1}
                control="Confirmed cases new_cases or total_cases_per_million"
              />
            </div>
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlNames.name2}
                control="Daily new values"
              />
              <ChartControls
                name={chartControlNames.name2}
                control="Cumulative mode"
              />
            </div>
          </div>
        </Tab>
        <Tab eventKey={chartControlNames.name3} title={chartControlNames.name3}>
          {selectedCountry && selectedCountry}
          <br />
          <h1>
            Bar chart{" "}
            {chartControlNames.name3 === selectedOptions.RankedCharts1.name &&
              selectedOptions.RankedCharts1.value}
          </h1>
          <br />
          <h1>
            Bar chart{" "}
            {chartControlNames.name4 === selectedOptions.RankedCharts2.name &&
              selectedOptions.RankedCharts2.value}
              <BarChart countryKeys={countryKeys} />
          </h1>
          <br />
          <div className="d-flex gap-2 flex-wrap justify-content-between">
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlNames.name3}
                control="Total number of deaths total_deaths"
              />
              <ChartControls
                name={chartControlNames.name3}
                control="Total number of cases total_cases"
              />
            </div>
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlNames.name4}
                control="Countries to show 2"
              />
              <ChartControls
                name={chartControlNames.name4}
                control="Countries to show 3"
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}
export default ChartBlock;
