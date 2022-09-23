import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
    firstName: "",   
});

const firstNameInputChange = (event) => {
    setValues({...values, firstName: event.target.value})};

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
      <button class="form-field" type="submit">
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
