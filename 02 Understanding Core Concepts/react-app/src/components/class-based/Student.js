import React, { Component } from 'react';
import StudentInfo from './StudentInfo';
import StudentEducation from './StudentEducation';
import StudentAddress from './StudentAddress';

// Class-based Components
// class Stundent extends React.Component {
class Stundent extends Component {
    
    state = {  
        address: {
            town: 'Berlin',
            street: 'Berlin Street',
            alley: 'Berlin Alley',
            number: '123'
        } 
    };

    render() {
        return (
            <div> {/* root element */}
                <StudentInfo fname="Salar" lname="Farahmand" age="27" />

                <StudentEducation degree="bachalor" major="Computer Engineering" />

                <StudentAddress>                    
                    <p>
                        <label>Town:</label>
                        <span>{this.state.address.town}</span>                        
                    </p>
                    <p>
                        <label>Street:</label>
                        <span>{this.state.address.street}</span>                        
                    </p>
                    <p>
                        <label>Alley:</label>
                        <span>{this.state.address.alley}</span>                        
                    </p>
                    <p>
                        <label>Number:</label>
                        <span>{this.state.address.number}</span>                        
                    </p>
                </StudentAddress>                    

            </div>
        );
    }


};

export default Stundent;