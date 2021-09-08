import React from 'react';

const StudentEducation = (props) => {
    return (
        <div>
            <h2>Student Education</h2>
            <p>Education degree: {props.degree}</p>
            <p>Education Major: {props.major}</p>        
        </div>        
    );
};

export default StudentEducation;