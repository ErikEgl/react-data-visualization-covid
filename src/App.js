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
        <div className={isLoading && "position-relative vh-100"}>
          <Loader />
          <ModeToggle />
        </div>
        {!isLoading && <ChartBlock />}
      </main>
    </>
  );
}
export default App;
