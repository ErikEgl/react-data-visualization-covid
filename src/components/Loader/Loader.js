import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../utils/useContext";
import Spinner from 'react-bootstrap/Spinner';
function Loader() {
  const [loadingInfo, setLoadingInfo] = useState(null);


  let API_URL = "https://covid.ourworldindata.org/data/owid-covid-data.json";
  const { getCovidData, getIsLoading, isLoading, setIsLoading, setCovidData, covidData } = useContext(UserContext);


  useEffect(() => {
    setIsLoading((prevState) => !prevState);

    (async () => {
      let response = await fetch(API_URL);
      const reader = response.body.getReader();
    
      const contentLength = +response.headers.get("Content-Length");
    
      let receivedLength = 0;
      let chunks = [];
    
      while (1) {
        const { done, value } = await reader.read();
    
        if (done) {
          break;
        }
    
        chunks.push(value);
        receivedLength += value.length;
        
        setLoadingInfo(`Loading... ${((receivedLength * 100) / contentLength).toFixed(2)}%`);
      }
    
      let chunksAll = new Uint8Array(receivedLength);
      let position = 0;
      for (let chunk of chunks) {
        chunksAll.set(chunk, position);
        position += chunk.length;
      }
    
      let result = new TextDecoder("utf-8").decode(chunksAll);
      let jsonResult = JSON.parse(result);
      setIsLoading((prevState) => !prevState);
      setCovidData(jsonResult);
    })();

  }, []);
  return (
    <div>
      {isLoading && loadingInfo}
      {isLoading && <Spinner animation="border" role="status"></Spinner>}
    </div>
  );
}

export default Loader;
