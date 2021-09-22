import React from 'react';

const NewPhoneNameInput = (props) => {

    const inputChangeHandler = (event) => {
        props.onSetNewName(event.target.value);
    }

    return <>
        <label htmlFor='fname'>First Name</label>
        <input type='text' id='fname' value={props.newName} onChange={inputChangeHandler} />
    </>

};

export default NewPhoneNameInput;