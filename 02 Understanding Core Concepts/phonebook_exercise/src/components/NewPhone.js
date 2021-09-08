import React from 'react'

const NewPhone = (props) => {
    const addNumber = (event) => {
        event.preventDefault();
        // console.log('event: ', event.target); // *
        props.onAddTask();         
    }

    return <form onSubmit={(e) => addNumber(e)}>
        <label htmlFor='fname'>First Name</label>
        <input type='text' id='fname' />

        <label htmlFor='lname'>Last Name</label>
        <input type='text' id='lname' />

        <label htmlFor='num'>Number</label>
        <input type='text' id='num' />

        {/* <button type='submit' onClick={(e) => addNumber(e)}>Add Number</button> */}
        <button type='submit'>Add Number</button>
    </form>
}

export default NewPhone
