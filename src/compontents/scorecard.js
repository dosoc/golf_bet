import React from 'react'
import styled from 'styled-components';

const StyledScorecard = styled.div`
    border: 1px solid black;
    box-shadow: 1px 1px 4px black;
    margin: 5px;
`;

const StyledHole = styled.div`
    display: flex;
`

const Scorecard = (props) => {
    return (
        <StyledScorecard className='scorecard'>
            <h2>Scorecard</h2>
            <StyledHole>
                {props.data.map(hole=> {
                    return <div className='hole-container' key={hole.number}>
                        <p>{hole.number}</p>
                        <p>Par: {hole.par}</p>
                        <p>{hole.length}</p>
                    </div>
                })}
            </StyledHole>
        </StyledScorecard>
    )
}
export default Scorecard;