import React from 'react'

const FormInput = (props) => {
    const inputChangeHandler = (event) => {
        props.onSetState(event.target.value);
    }

    return <>
        <label htmlFor={props.id}>{props.inputLabel}</label>
        <input type='text' id={props.id} value={props.value} onChange={inputChangeHandler} />
        {props.value.length === 0 ? <small>Please fill the input!</small> : ''}
    </>
}

export default FormInput
