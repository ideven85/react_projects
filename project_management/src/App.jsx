// Project: project_management
// File: /Users/deven/Developer/react_projects/project_management/src/App.jsx

import React from 'react'
//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

const canDrive = (age) => age>=18?"Sarah can Drive": "Can drive after " +  (18-age) + "  years"; 

function App() {
  //const [count, setCount] = useState(0)
  const [age,setAge] = React.useState(0);
  const handleChange = (event) => {
    //event.preventDefault();
    setAge(event.target.value);
  }
  return (
    <>
    <div className='container'>
      <h1>Hi</h1>
      <form>
      <label htmlFor='something'>Input age</label>
      <input type="number" id="something" onChange={handleChange} />
      <button type='submit' onClick={handleChange}>Submit</button>
      </form>
       {canDrive(age)}
      </div>
    </>
  )
}

export default App
