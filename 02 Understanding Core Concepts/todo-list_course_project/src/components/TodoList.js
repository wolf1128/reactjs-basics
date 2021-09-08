import React, { useState, useEffect } from 'react';

const TodoList = (props) => {

    // const [ phonesCount, setPhonesCount ] = useState(0);
    // const [ counter, setCounter ] = useState(0);

    // (1) without dependecy array: React specifies all of the variables as dependencies.
    // useEffect(() => {
    //     console.log('useEffect called!');
    //     console.log('props length: ', props.items.length);
    // }); 
    // (2) with empty dependecy array: call the function once the component creates.
    // useEffect(() => {
    //     console.log('useEffect called!');
    //     console.log('props length: ', props.items.length);
    // }, []);
    // (3) with dependecy array: call the function when one of the dependencies changed.
    // useEffect(() => {
    //     console.log('useEffect called!');
    //     console.log('props length: ', props.items.length);

    //     // setPhonesCount(props.items.length);
    // }, [props]);
    // useEffect(() => {
    //     console.log('useEffect called!');
    //     console.log('props length: ', props.items.length);

    //     // setPhonesCount(props.items.length);
    // }, [props, counter]);

    // (4) with clean up
    // useEffect(() => {
    //     console.log('useEffect called!');
    //     console.log('props length: ', props.items.length);

    //     // clean up
    //     return setCounter(0);

    // }, [props]);

    // (5) two different useEffect()
    // useEffect(() => {
    //     console.log('useEffect(1) called!');
    //     console.log('props length: ', props.items.length);


    // }, [props]);
    // useEffect(() => {
    //     console.log('useEffect(2) called!');
    //     console.log('clicked!!!');

    // }, [counter]);
    

    // const addCounterHandler = (event) => {
    //     // old counter + 1 => mutate state immutable!
    //     // xxx immutable
    //     // const newCounter = counter + 1;
    //     // setCounter(newCounter);
    //     // immutable way
    //     setCounter((prevCounter) => {
    //         return prevCounter + 1
    //     });
    // }

    return <ul>
        <li>{props.items[0].task}</li>
        <li>{props.items[1].task}</li>
        <li>{props.items[2].task}</li>
        <li>{props.items[3].task}</li>
        <hr />
        {/* <span> Count of numbers: { phonesCount }</span> */}
        {/* <button onClick={addCounterHandler}>Add Counter</button>
        <span> Counter: { counter } </span> */}
    </ul>;
};

export default TodoList;