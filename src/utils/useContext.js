import { useState, createContext } from "react";
const UserContext = createContext();

function AppContextProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  function changeMode() {
    setIsDarkMode(prevMode => !prevMode)
  }


  return (
    <UserContext.Provider value={{isDarkMode, changeMode}}>
      {props.children}
    </UserContext.Provider>
  );
}

export { AppContextProvider, UserContext };