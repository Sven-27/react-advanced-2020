import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name: 'sven', age: 41, message: 'some message'})
  const [name, setName] = useState('peter')
  const [age, setAge] = useState(41)
  const [message, setMessage] = useState('hupppelte')
 
  const changeMessage = () => {
    // setPerson({...person, message: 'helllloooooo'})
    setMessage('krijg nou de klere')
  }


  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h3>{person.message}</h3>
   <h3>{message}</h3>
  <button className="btm" onClick={changeMessage}>change it</button>
  </>;
};
export default UseStateObject;
