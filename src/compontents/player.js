import React from 'react'
import styled from 'styled-components'

const StyledPlayer = styled.div`
    border: 1px solid black;
    box-shadow: 1px 1px 4px black;
    margin: 5px;
`

const Player = props => {
    
    return (
        <StyledPlayer className='container'>
            <h2>{props.player.firstName} {props.player.lastName}</h2>
            <p>{props.player.club}</p>
            <p>{props.player.handicapIndex}</p>
        </StyledPlayer>
    )
}
export default Player;