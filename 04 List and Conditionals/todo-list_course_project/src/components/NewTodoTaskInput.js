import React from 'react';

const NewTodoTaskInput = (props) => {

    // const [ newTask, setNewTask ] = React.useState('');

    const inputChangeHandler = (event) => {
        props.onSetNewTask(event.target.value);
    }

    // way#1
    // const conditionalErrorMessage = () => {
    //     if(props.newTask.length === 0) {
    //         return <small>Please fill the input!</small>
    //     }        
    // }

    return <>
        <label htmlFor='task'>{props.label}</label>
        <input type='text' id='task' value={props.newTask} onChange={inputChangeHandler} /> {/* two way data binding */}
        {/* {conditionalErrorMessage()} */}
        {/* way#2 */}
        {props.newTask.length === 0 ? <small>Please fill the input!</small> : ''}
    </>

};

export default NewTodoTaskInput;