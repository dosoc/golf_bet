import React, { useState, useEffect } from 'react'
import './App.css';
import { testPlayers } from './dummydata'
import Player from './compontents/player'
import Scorecard from './compontents/scorecard'
import BetForm from './compontents/betForm.jsx'
import { jacksonCountryClub } from './JCC'

const initialFormValues = {
  course: "",
  players: "",
}

const initialPlayerValues = {
        firstName: "",
        lastName: "",
        club: "",
        handicapIndex: ""
}


function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ players, setPlayers ] = useState([])
  const [ playerValues, setPlayerValues] = useState(initialPlayerValues)

  const addPlayer = () => {
    const newPlayer = {
      firstName: playerValues.firstName.trim(),
      lastName: playerValues.lastName.trim(),
      club: playerValues.club.trim(),
      handicapIndex: playerValues.handicapIndex.trim(),
    }
    setPlayers([...players, newPlayer])
    setPlayerValues(initialPlayerValues)
  }

  const inputChange = (name, value) => {
    setPlayerValues({...playerValues, [name]: value})
  }

  const removePlayer = (evt) => {
    console.log(evt.target.value)
  }

  useEffect(()=>{
    console.log(players)

  }, [players])

  return (
    <div className="App">
      <h1>The Golf Bet</h1>

      <BetForm 
        values={playerValues} 
        players={players} 
        addPlayer={addPlayer} 
        change={inputChange}
        submit={addPlayer}
      />

      <div className='playerlist'>
        <h2>Player List</h2>
        {players.map((player,i) => {
       return <Player player={player} key={i+1} remove={removePlayer}/>
      })}
      </div>
      
    </div>
  );
}

export default App;
