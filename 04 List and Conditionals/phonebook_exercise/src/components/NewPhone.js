import React from 'react';
import FormInput from './FormInput';
import InputCounts from './InputCounts';

const NewPhone = (props) => {

    const [ newFName, setNewFName ] = React.useState('');
    const [ newLName, setNewLName ] = React.useState('');
    const [ newNumber, setNewNumber ] = React.useState('');
    
    const addNumber = (event) => {
        event.preventDefault();
        // console.log('event: ', event.target); // *
        props.onAddNumber(newFName, newLName, newNumber);         
    }

    return <form onSubmit={(e) => addNumber(e)}>
        <FormInput id={'fname'} inputLabel={'First Name'} value={newFName} onSetState={setNewFName} />
        <InputCounts counts={newFName.length} />
        <FormInput id={'lname'} inputLabel={'Last Name'} value={newLName} onSetState={setNewLName} />
        <InputCounts counts={newLName.length} />
        <FormInput id={'num'} inputLabel={'Number'} value={newNumber} onSetState={setNewNumber} />
        <InputCounts counts={newNumber.length} />

        <button type='submit' disabled={newFName.length === 0}>Add Number</button>
    </form>
}

export default NewPhone
