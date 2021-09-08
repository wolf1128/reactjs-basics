import React from 'react';

class StudentAddress extends React.Component {

    render() {
        return (
            <div>
                <h2>Address Info</h2>
                <p>{this.props.children}</p>
            </div>
        );
    }
    
};

export default StudentAddress;