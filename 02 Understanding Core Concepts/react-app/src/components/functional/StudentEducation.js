import React from 'react';

const StudentEducation = (props) => {
    return (
        <div>
            <h2>Studnet Education</h2>
            <p>Education Degree: {props.degree}</p>
            <p>Education Major: {props.major}</p>
        </div>
    );


};

export default StudentEducation;