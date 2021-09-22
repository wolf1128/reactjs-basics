import React from 'react';
import NewPhoneNameInput from './NewPhoneNameInput';
import NewTodoTaskInputCounts from './NewPhoneNameInputCounts';

const NewPhone = (props) => {

    const [ newName, setNewName ] = React.useState('');
    
    const addNumber = (event) => {
        event.preventDefault();
        // console.log('event: ', event.target); // *
        props.onAddTask();         
    }

    return <form onSubmit={(e) => addNumber(e)}>
        <NewPhoneNameInput newName={newName.toLowerCase()} onSetNewName={setNewName} label={'New Name(lowercase)'} />
        <NewTodoTaskInputCounts counts={newName.length} />
        <NewPhoneNameInput newName={newName.toUpperCase()} onSetNewName={setNewName} label={'New Name(uppercase)'} />
        <NewTodoTaskInputCounts counts={newName.length} />

        <label htmlFor='lname'>Last Name</label>
        <input type='text' id='lname' />

        <label htmlFor='num'>Number</label>
        <input type='text' id='num' />

        {/* <button type='submit' onClick={(e) => addNumber(e)}>Add Number</button> */}
        <button type='submit'>Add Number</button>
    </form>
}

export default NewPhone
