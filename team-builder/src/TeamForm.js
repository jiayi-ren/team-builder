import React, {useEffect, useState} from 'react';

const TeamForm = props =>{
    const {values, onInputChange, onSubmit, isEditing} = props
        
    const [buttonText, setButtonText] = useState("submit")

    useEffect(()=>{

        if(isEditing){
            console.log("is editing")
            setButtonText("update")
        }else{
            console.log("not editing")
            setButtonText("submit")
        }
        
    },[isEditing])
   
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
                <button onClick={onSubmit}>{buttonText}</button>
            </form>
        </div>
    )
};

export default TeamForm;