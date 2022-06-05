import React from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
    border: 1px solid black;
    box-shadow: 1px 1px 4px black;
    margin: 5px;
    display: flex;
    justify-content: space-around;
`

const Player = props => {
    const { player, key, remove } = props

    const removePlayer = (evt) => {
        console.log(evt.target)
    }
    
    return (
        <StyledPlayer className='container'>
            <h2>{player.firstName} {player.lastName}</h2>
            <p>{player.club}</p>
            <p>{player.handicapIndex}</p>
            <button onClick={removePlayer} key={player.firstName}>Remove Player</button>
        </StyledPlayer>
    )
}
export default Player;