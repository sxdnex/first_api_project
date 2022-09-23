import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import ListItem from './components/listItem';

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

return (
  <div className="form-container">
    <form className="register-form">     
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
    </form>
    <div className='ausgabe'>
      {person ? person.map((p) =>  <ListItem key={p.id} item={p} />) : <></>}
    </div>
  </div>
);
}

export default App;