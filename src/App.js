import React, { useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [values, setValues] = useState({
    firstName: "",   
});
  const [error, setError] = useState();

const firstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})};

//triggers Loading of Employees Data
const handleLoading = async () => {
    alert("aggro");
    // await fetch("localhost:3400/testingApi")
    //     .then((response) => response.json())
    //     .then((response) => {
    //         alert(response);
    //         setError(null);
    //     })
    //     .catch(setError);
}


return (
  <div class="form-container">
    <form class="register-form">    
      <input
      onChange={firstNameInputChange} 
        value={values.firstName}
        className="form-field"
        type="text"
        placeholder="Input Bitte"
        name="firstName"
      />      
      <div className='buttons'>
      <button class="form-field" type="submit">
        Löschen
      </button>
      <button class="form-field" type="submit" onClick={handleLoading}>
        Pull
      </button>
      <button class="form-field" type="submit">
        Update
      </button>     
      </div>
      <output> 
        {""}
      </output>
    </form>
  </div>
);
}

export default App;
