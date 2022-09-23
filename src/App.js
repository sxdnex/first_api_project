import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [values, setValues] = useState({
    firstName: "",   
});
  const [person, setPerson] = useState();
  const [error, setError] = useState();


const firstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})};

//triggers Loading of Employees Data
const handleLoading = async (e) => {
  e.preventDefault();

  const Data = await fetch("http://localhost:3400/testingApi").then(response => response.json()).then(response => {return response.data});

  setPerson(Data);

  setValues(Data[1].name)
}

const Wrapper = (item) => {
  return (
      <div>
        <p>{item.name}</p>
        <p>{item.lastName}</p>
        <p>{item.sex}</p>
        <p>{item.age}</p>
        <p>{item.department}</p>
      </div>

  )
}


return (
  <div className="form-container">
    <form className="register-form">
      <input
      onChange={firstNameInputChange} 
        value={values}
        className="form-field"
        type="text"
        placeholder="Input Bitte"
        name="firstName"
      />      
      <div className='buttons'>
      <button className="form-field" type="submit">
        Löschen
      </button>
      <button className="form-field" type="submit" onClick={(e) => handleLoading(e)}>
        Pull
      </button>
      <button className="form-field" type="submit">
        Update
      </button>     
      </div>
      {/*<output> */}
      {/*  {""}*/}
      {/*</output>*/}
    </form>
    {person ? person.map((p) => Wrapper(p)) : <></>}
  </div>
);
}

export default App;