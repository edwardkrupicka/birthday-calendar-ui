import './App.css';
import { months } from '../../months_data';
import { getBirthdays, getBirthdayMonths } from '../../apiCalls.js';
import Form from '../Form/Form';
import Grid from '../Grid/Grid';

const App = () => {

console.log(getBirthdayMonths(), getBirthdays())

  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>
        <Form />
      </div>
      <div className='bday-container'>
        <Grid />
      </div>
    </div>
  );
}

export default App;
