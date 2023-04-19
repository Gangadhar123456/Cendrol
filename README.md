In this code, we have three components: CounterButton for the first task, ComponentA and ComponentB for the second task, and BooleanButton for the third task.

For the first task, CounterButton uses the useState hook to keep track of the count and button color state. On click of the button, it increments the count and sets the button get  random color .

For the second task, ComponentA passes the cendol state to ComponentB as a prop. ComponentB uses the useState hook to modify cendol state, and on click of its button, it increments cendol by 10.

For the third task, BooleanButton uses the useState hook to keep track of the boolean state. On click of its button, it toggles the boolean state and sets the background color of the button accordingly.

All components are written as functional components, and CSS styles are applied using a './App.css' file.