import React from 'react'

const phonesList = (props) => {
    return <ul>
        <li>{props.items[0].firstName} &nbsp; {props.items[0].lastName} : {props.items[0].number}</li>
        <li>{props.items[1].firstName} &nbsp; {props.items[1].lastName} : {props.items[1].number}</li>
        <li>{props.items[2].firstName} &nbsp; {props.items[2].lastName} : {props.items[2].number}</li>
        <li>{props.items[3].firstName} &nbsp; {props.items[3].lastName} : {props.items[3].number}</li>
    </ul>;
}

export default phonesList
