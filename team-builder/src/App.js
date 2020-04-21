import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from './TeamMebmer.js';
import TeamForm from './TeamForm.js';

const initialTeamList = [{
  name:'team',
  email: 'me@email.com',
  role: 'engineer'
}]

const initialFormValues = {
  name:'',
  email:'',
  role:''
}

function App() {
  const [teamMembers, setTeamMembers] = useState(initialTeamList)
  const [formValues, setFormValues] = useState(initialFormValues)
  // edit
  const [isEditing, setIsEditing] = useState(0)
  const [memberToEdit, setMemberToEdit] = useState(null)

  const onInputChange = event =>{
    const name = event.target.name
    const value = event.target.value
    setFormValues({...formValues, [name]: value})
  }

  const onSubmit = event =>{
    event.preventDefault()

    if(isEditing){
      teamMembers[memberToEdit] = {
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
      }
      console.log(teamMembers[memberToEdit])
      setTeamMembers([...teamMembers])
      setFormValues(initialFormValues)
      setIsEditing(0)
    }else{
      const newTeamMember = {
        name: formValues.name,
        email: formValues.email,
        role: formValues.role
      }
      setTeamMembers([...teamMembers, newTeamMember])
      setFormValues(initialFormValues)
    }  
  }
  
  //edit function
  const onEdit = event =>{
    setIsEditing(1)
    setMemberToEdit(event.target.value)
    setFormValues(teamMembers[event.target.value])
  }

  return (
    <div>
      <header><h1>Team Members App</h1></header>
      {
        teamMembers.map((teamMember,index) => {
          return (
            <div key={index}>
            <TeamMember details={teamMember} />
            <button onClick={onEdit} value={index}>Edit</button>
            </div>
          )
        })
      }
      <TeamForm 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
      isEditing={isEditing}
      />

    </div>
  );
}

export default App;
