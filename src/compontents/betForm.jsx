import React from 'react';

export default function BetForm(props) {
    const { values,
            players, 
            setUpBets, 
            change,
            submit
        } = props;

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valuetoUse = type === 'checkbox' ? checked:value
        change(name, valuetoUse)
    }

    return(
        <div className='form container'>
            <h2>Add A Player</h2>
            <form onSubmit={onSubmit}>
                <label htmlFor="">
                    <input 
                        type="text"
                        name='firstName'
                        onChange={onChange}
                        value={values.firstName}
                        placeholder= 'First Name...' />
                </label>
                <label htmlFor="">
                    <input 
                        type="text"
                        name='lastName'
                        onChange={onChange}
                        value={values.lastName}
                        placeholder= 'Last Name...' />
                </label>
                <label htmlFor="">
                    <input 
                        type="text"
                        name='club'
                        onChange={onChange}
                        value={values.club}
                        placeholder= 'Club...' />
                </label>
                <label htmlFor="">
                    <input 
                        type="integer" 
                        name="handicapIndex"
                        onChange={onChange}
                        value={values.handicapIndex}
                        placeholder= "Handicap Index" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}