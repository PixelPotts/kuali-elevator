import React from 'react';
import ElevatorController from './ElevatorController'
import './App.css';

const numElevators        = 3;
const numFloors           = 10;

function simulator(){
  let Control =  new ElevatorController(numElevators,numFloors);
  let elevators = [...Array(numElevators).keys()];

}

function App() {

  simulator();

  return (
    <div className="App">
      <h3>Elevator Status</h3>
    </div>
  );
}

export default App;
