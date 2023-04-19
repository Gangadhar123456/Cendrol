import { useState } from "react";

import './App.css';


function BooleanButton() {
  const [isRed, setIsRed] = useState(false); // intial value false

  const handleClick = () => {
    setIsRed(prevState => !prevState); // toggle condition here
  };
  
  // { backgroundColor: isRed ? 'red' : 'blue' }  ternary operator

  return (
    <div>
      <button className="change-colour-btn" onClick={handleClick} style={{ backgroundColor: isRed ? 'red' : 'blue' }}> 
        Change Colour
      </button>
    </div>
  );
}
export default BooleanButton