import React from 'react';

const TeamForm = props =>{
    const {values, onInputChange, onSubmit} = props

    return (
        <div>
            <form>
                <h2>Team Member Form</h2>
                <label>Name:
                    <input 
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'/>
                </label>
                <label>Email: 
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='text'/>
                </label>
                <label>Role:
                    <input
                    value={values.role}
                    onChange={onInputChange}
                    name='role'
                    type='text'/>
                </label>
                <button onClick={onSubmit}>submit</button>
            </form>
        </div>
    )
};

export default TeamForm;