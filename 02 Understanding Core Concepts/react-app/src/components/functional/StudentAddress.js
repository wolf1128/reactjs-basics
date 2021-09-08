import React from 'react';

const StudentAddress = (props) => {
    return (
        <div>            
            <h2>Student Address</h2>
            <div>{props.children}</div>
        </div>
    );
};

export default StudentAddress;