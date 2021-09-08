import React from 'react';

const StundetInfo = (props) => {

    // const fullName = (fname, lname) => {
    //     return fname + ' ' + lname;
    // }
    function fullName(fname, lname) {
        // return fname + ' ' + lname;
        if (fname.length > 4) {
            // return 'invalid first name';
            return <span>invalid first name</span>;
        }
        return fname + ' ' + lname;
    }

    return (
        <div>
            <h2>Stundet Info</h2>
            <p>First Name: {props.fname}</p>
            <p>Last Name: {props.lname}</p>
            {/* <p>Full Name: {props.fname} {props.lname}</p> */}
            <p>Full Name: { fullName(props.fname, props.lname) }</p>
            <p>Phone Number: {props.phone}</p>
            <p>Age: {props.age}</p>            
        </div>
    );

};

export default StundetInfo;