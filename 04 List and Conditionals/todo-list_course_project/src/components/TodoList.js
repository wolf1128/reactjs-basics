import React from 'react';

const TodoList = (props) => {

    return <ul>
        {/* <li>{props.items[0].task}</li>
        <li>{props.items[1].task}</li>
        <li>{props.items[2].task}</li>
        <li>{props.items[3].task}</li> */}

        {/* {props.items.map((item, index) => {
            // return <li key={item.task}>{item.task}</li>
            return <li key={index}>{item.task}</li>
        })} */}
        {/* Way#2  */}
        {/* {props.items.map((item, index) => <li key={index}>{item.task}</li>)}         */}
        {props.items.map((item, index) => {
            return (
                <div key={index}> {/* React tracks the elements in the list in the child element. */}
                    <li>{item.task}</li>
                    {/* <button onClick={props.onRemoveTodo(index)}>DELETE</button>  NOTE: do not call the method! just pass the reference.                    */}
                    <button onClick={() => props.onRemoveTodo(index)}>DELETE</button>                     
                </div>
            )
        })} 
        <hr />
    </ul>;
};

export default TodoList;