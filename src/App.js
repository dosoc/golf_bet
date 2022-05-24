import './App.css';
import { players } from './dummydata'
import Player from './compontents/player'
import Scorecard from './compontents/scorecard'
import styled from 'styled-components'
import { jacksonCountryClub } from './JCC'

console.log(players)
console.log(jacksonCountryClub);

function App() {
  return (
    <div className="App">
      <h1>The Golf Bet</h1>
      <Scorecard data={jacksonCountryClub}/>
      {players.map((player) => {
       return <Player player={player} key={player.id}/>
      })}
    </div>
  );
}

export default App;
