import React from 'react';


class StudentInfo extends React.Component {

    render() {
        return (
            <div>
                <h2>Student Info</h2>
                <p>First Name: {this.props.fname}</p>
                <p>Last Name: {this.props.lname}</p>
                <p>Age: {this.props.age}</p>
            </div>
        );
    }

};

export default StudentInfo;