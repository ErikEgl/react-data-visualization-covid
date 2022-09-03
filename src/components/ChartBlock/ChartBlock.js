import React from "react";
import CountrySelect from "../CountrySelect/CountrySelect";
import ChartControls from "../ChartControls/ChartControls";
import { Tab, Tabs } from "react-bootstrap";
import BarChart from "../ChartTypes/BarChart";
import { useContext } from "react";
import { UserContext } from "../../utils/useContext";

function ChartBlock(props) {
  const { selectedCountry, selectedOptions, useWindowDimensions } = useContext(UserContext);
  const { covidData, countryKeys, chartControlsData } = useContext(UserContext);

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
            {/* {chartControlsData.name1.control_title === selectedOptions.ReportedCases1.value && selectedOptions.ReportedCases1.value && <BarChart selectedInputOption={chartControlsData.name1.control_option_1} countryKeys={countryKeys} />} */}
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
            <div className="d-flex rounded border border-5 justify-content-center align-items-center">
              <ChartControls
                name={chartControlsData.name5.name} //must be same same as same ChartControls name, so one input will be off other on 
                control="Daily new values"
              />
              <ChartControls
                name={chartControlsData.name5.name} //must be same same as same ChartControls name, so one input will be off other on 
                control="Cumulative mode"
              />
            </div>
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
