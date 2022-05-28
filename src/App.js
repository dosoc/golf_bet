import React, { useState } from 'react'
import './App.css';
import { testPlayers } from './dummydata'
import Player from './compontents/player'
import Scorecard from './compontents/scorecard'
import BetForm from './compontents/betForm.jsx'
import { jacksonCountryClub } from './JCC'


console.log(testPlayers)
console.log(jacksonCountryClub);

const initialFormValues = {
  course: "",
  players: "",
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [ players, setPlayers ] = useState(testPlayers)
  return (
    <div className="App">
      <h1>The Golf Bet</h1>
      <BetForm values={formValues} />
      <Scorecard data={jacksonCountryClub}/>
      {players.map((player) => {
       return <Player player={player} key={player.id}/>
      })}
    </div>
  );
}

export default App;
