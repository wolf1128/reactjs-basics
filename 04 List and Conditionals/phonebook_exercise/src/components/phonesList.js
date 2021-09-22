import React from 'react'

const phonesList = (props) => {
    return <ul>
        {props.phoneNumbers.map((phoneNumber, index) => {
            return (
                <div key={index}> {/* React tracks the elements in the list in the child element. */}
                    <li>{phoneNumber.firstName} {phoneNumber.lastName}: {phoneNumber.number}</li>
                    <button onClick={() => props.onRemovePhone(index)}>DELETE</button>                     
                </div>
            )
        })} 
    </ul>;
}

export default phonesList
