import React from 'react';

export default function BetForm(props) {
    const { values, setUpBets, onChange } = props;

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
            </form>
        </div>
    )
}