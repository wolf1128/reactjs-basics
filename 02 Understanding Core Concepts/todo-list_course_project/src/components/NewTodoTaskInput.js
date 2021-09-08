import React from 'react';

const NewTodoTaskInput = (props) => {

    // const [ newTask, setNewTask ] = React.useState('');

    const inputChangeHandler = (event) => {
        props.onSetNewTask(event.target.value);
    }

    return <>
        {/* <label htmlFor='task'>New Task</label> */}
        <label htmlFor='task'>{props.label}</label>
        {/* <input type='text' id='task'  onChange={ e => setNewTask(e.target.value)} /> one way data binding     */}
        <input type='text' id='task' value={props.newTask} onChange={inputChangeHandler} /> {/* two way data binding */}
    </>

};

export default NewTodoTaskInput;