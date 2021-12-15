import './App.css';
import React, { useState, useEffect } from 'react';
import { months } from '../../months_data';
import { getBirthdays, getBirthdayMonths } from '../../apiCalls.js';
import Form from '../Form/Form';
import Grid from '../Grid/Grid';

const App = () => {
  const[monthState, setMonthState] = useState({
    months: []
  })

  const[birthdayState, setBirthDayState] = useState({
    birthdays: []
  })

  useEffect(() => {
    getBirthdayMonths().then(
      data => setMonthState({ months: data })
    )
    getBirthdays().then(
      data => setBirthDayState({ birthdays: data })
    )
    
}, [])

  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
        <Form />
      </div>
      <div className='bday-container'>
        <Grid months={monthState.months} birthdays={birthdayState.birthdays} />
      </div>
    </div>
  );
}

export default App;
