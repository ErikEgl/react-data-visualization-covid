import { useContext } from "react";
import { UserContext } from "./utils/useContext";

import ModeToggle from "./components/ModeToggle/ModeToggle";
import ChartBlock from "./components/ChartBlock/ChartBlock";

import Loader from "./components/Loader/Loader";

function App() {
  const { isLoading } = useContext(UserContext);
  return (
    <>
      <main>   
        <Loader/> 
        <ModeToggle />
        <ChartBlock />
      </main>
    </>
  );
}
export default App;
