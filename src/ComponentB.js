
function ComponentB({ cendol, setCendol }) { // props of componentA
    const handleClick = () => {
      setCendol(cendol + 10);
    };

     // increament by 10 onClick on button element 
  
    return (
      <center>
        <button onClick={handleClick}>Add 10 to Cendol</button> 
        <p>{cendol}</p>
      </center>
    );
  }
  export default ComponentB