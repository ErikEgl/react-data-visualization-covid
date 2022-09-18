import { useContext } from "react";
import { UserContext } from "../../utils/useContext";
import { Button } from 'react-bootstrap';

function ModeToggle() {
  const { isDarkMode, changeMode } = useContext(UserContext);
  return (
    <>
      <Button className='mt-1' onClick={changeMode}>
        {isDarkMode ? "Change to light mode 🌞" : "Change to dark mode 🌒"}
      </Button>
    </>
  );
}
export default ModeToggle;
