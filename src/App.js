import { useContext } from "react";
import ModeToggle from "./components/ModeToggle/ModeToggle";
import { UserContext } from "./utils/useContext";
function App() {
  const { isDarkMode } = useContext(UserContext);
  return (
    <main className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <ModeToggle />
    </main>
  );
}
export default App;
