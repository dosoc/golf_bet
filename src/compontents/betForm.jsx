import React from 'react';

export default function BetForm(props) {
    const { values, players, setUpBets, onChange } = props;
    console.log(players)

    return(
        <div className='form container'>
            <h2>Set Up your Bets</h2>
            <form >
                <label>Course
                    <input 
                        type="text"
                        name="course"
                        value={values.course}
                        onChange={onChange} />
                </label>
                <div>
                    <h4>Players</h4>
                    {players && players.map((player, i) => {
                        return <label>{player.firstName}
                        <input 
                            type="checkbox"
                            name={player.name}
                            value={values.name}
                            onChange={onChange} />
                        </label>
                    })}
                    
                    
                </div>
            </form>
        </div>
    )
}