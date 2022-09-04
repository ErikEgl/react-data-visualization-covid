import { useContext } from "react";
import { UserContext } from "./utils/useContext";

import ModeToggle from "./components/ModeToggle/ModeToggle";
import ChartBlock from "./components/ChartBlock/ChartBlock";
import Spinner from 'react-bootstrap/Spinner';


function App() {
  const { isLoading } = useContext(UserContext);
  console.log(isLoading);
  return (
    <>
      <main>    
        {isLoading && <Spinner animation="border" role="status"></Spinner>}
        <ModeToggle />
        <ChartBlock />
      </main>
    </>
  );
}
export default App;
