import React from "react";
import CountrySelect from "../CountrySelect/CountrySelect"
import ChartControls from "../ChartControls/ChartControls";
import { Tab, Tabs } from 'react-bootstrap';
import { BarChart, LineChart, LineSeries, PointSeries } from 'reaviz';
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";


function ChartBlock(props) {
  const { selectedCountry, selectedOptions} = useContext(UserContext);
  const { covidData } = useContext(UserContext);
  const chartControlNames = {
    name1: "ReportedCases",
    name2: "RankedCharts"
  }
  return (
    <div className="chart-block">
      <CountrySelect />
      <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey={chartControlNames.name1} title={chartControlNames.name1}>
        {selectedCountry && selectedCountry.countrySelect }
        <br/>
        <h1>
          Line chart {chartControlNames.name1 === selectedOptions.ReportedCases.name && selectedOptions.ReportedCases.value}
        </h1>
        <br/>
        <ChartControls name={chartControlNames.name1} control="Death count"/>
        <ChartControls name={chartControlNames.name1} control="Confirmed cases"/>
        </Tab>
        <Tab eventKey={chartControlNames.name2} title={chartControlNames.name2}>
        {selectedCountry && selectedCountry.countrySelect }
        <br/>
        <h1>
          Bar chart {chartControlNames.name2 === selectedOptions.RankedCharts.name && selectedOptions.RankedCharts.value}
        </h1>
        <br/>
        <ChartControls name={chartControlNames.name2} control="Daily new values"/>
        <ChartControls name={chartControlNames.name2} control="Cumulative mode"/>
        </Tab>
      </Tabs>
      
      
    </div>
  );
}
export default ChartBlock;
