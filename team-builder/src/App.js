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

  const onInputChange = event =>{
    const name = event.target.name
    const value = event.target.value
    setFormValues({...formValues, [name]: value})
  }
  const onSubmit = event =>{
    event.preventDefault()
    const newTeamMember = {
      name: formValues.name,
      email: formValues.email,
      role: formValues.role
    }
    setTeamMembers([...teamMembers, newTeamMember])
    setFormValues(initialFormValues)
  }

  return (
    <div>
      <header><h1>Team Members App</h1></header>
      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
      <TeamForm 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
