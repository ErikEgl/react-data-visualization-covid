import { useContext } from "react";
import { UserContext } from "./utils/useContext";

import ModeToggle from "./components/ModeToggle/ModeToggle";
import ChartBlock from "./components/ChartBlock/ChartBlock";
import Spinner from 'react-bootstrap/Spinner';
import Loader from "./components/Loader/Loader";

function App() {
  const { isLoading } = useContext(UserContext);
  console.log(isLoading);
  return (
    <>
      <main>   
        <Loader/> 
        {isLoading && <Spinner animation="border" role="status"></Spinner>}
        <ModeToggle />
        <ChartBlock />
      </main>
    </>
  );
}
export default App;
