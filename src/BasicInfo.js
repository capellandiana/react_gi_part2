import React from 'react'
function BasicInfo(props) {
    return (
      <div>
        <h2>Basic Information</h2>
        <p>Name: {props.person.name}</p>
        <p>Age: {props.person.age}</p>
        <p>Email: {props.person.email}</p>
      </div>
    );
  }
  
export default BasicInfo;