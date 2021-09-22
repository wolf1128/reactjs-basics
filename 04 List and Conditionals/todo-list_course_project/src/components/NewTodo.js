import React from 'react';
import NewTodoTaskInput from './NewTodoTaskInput';
import NewTodoTaskInputCounts from './NewTodoTaskInputCounts';

const NewTodo = (props) => {
    const [ newTask, setNewTask ] = React.useState('');


    const addTask = (event) => {
        event.preventDefault();
        // props.onAddTodo();                
        props.onAddTodo(newTask); // mapping 1:1 between arguments, so the arguments shouldn't be the same always.            
    }

    return <form onSubmit={(e) => addTask(e)}>

        {/* display uppercase and lowercase of newTask synchronously  */}
        <NewTodoTaskInput newTask={newTask.toLowerCase()} onSetNewTask={setNewTask} label={'New Task(lowercase)'} />
        <NewTodoTaskInputCounts counts={newTask.length} />
        <NewTodoTaskInput newTask={newTask.toUpperCase()} onSetNewTask={setNewTask} label={'New Task(UPPERCASE)'} />
        <NewTodoTaskInputCounts counts={newTask.length} />

        {/* <button type='submit'>Add Task</button> */}
        <button type='submit' disabled={newTask.length === 0}>Add Task</button>
    </form>
};

export default NewTodo;