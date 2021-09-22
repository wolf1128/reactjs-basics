import React from 'react';
import NewTodoTaskInput from './NewTodoTaskInput';
import NewTodoTaskInputCounts from './NewTodoTaskInputCounts';

const NewTodo = (props) => {

    const [ newTask, setNewTask ] = React.useState('');

    // 'task'.toUpperCase()
    // 'task'.toLowerCase()

    // React.useEffect(() => {
    //     console.log('task: ', newTask);
    // }, [newTask]);

    const addTask = (event) => {
        event.preventDefault();
        // console.log('event: ', event.target); // *
        props.onAddTodo();                
    }

    return <form onSubmit={(e) => addTask(e)}>
        {/* <label htmlFor='task'>New Task</label>
        <input type='text' id='task' onChange={ e => setNewTask(e.target.value)} /> one way data binding */}

        {/* display uppercase and lowercase of newTask synchronously  */}
        <NewTodoTaskInput newTask={newTask.toLowerCase()} onSetNewTask={setNewTask} label={'New Task(lowercase)'} />
        <NewTodoTaskInputCounts counts={newTask.length} />
        <NewTodoTaskInput newTask={newTask.toUpperCase()} onSetNewTask={setNewTask} label={'New Task(UPPERCASE)'} />
        <NewTodoTaskInputCounts counts={newTask.length} />

        {/* <button type='submit' onClick={(e) => addTask(e)}>Add Task</button> */}
        <button type='submit'>Add Task</button>
    </form>
};

export default NewTodo;