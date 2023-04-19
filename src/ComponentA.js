import { useState } from "react";
import ComponentB from "./ComponentB"; // import the componentB

function ComponentA() {
  const [cendol, setCendol] = useState(2); // initial value 2

  return <ComponentB cendol={cendol} setCendol={setCendol} />; 
}
export default ComponentA