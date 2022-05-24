import React, {useState} from 'react'
import styled from 'styled-components';

const StyledScorecard = styled.div`
    border: 1px solid black;
    box-shadow: 1px 1px 4px black;
    margin: 5px;
    display: flex;
    flex-direction: column;
`

const Scorecard = (props) => {
    return (
        <StyledScorecard className='scorecard'>
            <h2>Scorecard</h2>
            <div className='holes'>
                {props.data.map(hole=> {
                    return <div className='hole-container' key={hole.number}>
                        <p>Hole: {hole.number}</p>
                        <p>Par: {hole.par}</p>
                        <p>{hole.length} Yards</p>
                        <input type={'number'}></input>
                    </div>
                })}
            </div>
        </StyledScorecard>
    )
}
export default Scorecard;