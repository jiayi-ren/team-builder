import React from 'react';

const TeamMember = props =>{
    if (!props.details) {
        return <h3>Working fetching your friend&apos;s details...</h3>
      }
    return (
        <div>
            <h2>{props.details.name}</h2>
            <p>Email: {props.details.email}</p>
            <p>Role: {props.details.role}</p>
        </div>
    )
};

export default TeamMember;