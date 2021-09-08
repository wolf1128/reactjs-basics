import React, { useState, useEffect} from 'react'; // React V. 16.8 +Hooks: useState(), useEffect(), useContext() and so on...
import StundentInfo from './StudentInfo';
import StudentEducation from './StudentEducation';
import StudentAddress from './StudentAddress';

const Stundet = () => {

    // const [ name, setName ] = useState('Salar'); // Initialization
    const [ address, setAddress ] = React.useState({
        town: 'Berlin',
        street: 'Berlin Street',
        alley: 'Berlin Alley',
        number: '123'
    });

    const [ phoneNumber, setPhoneNumber ] = useState('+49123456789');


    return (
        <div> {/* root element */}
            <StundentInfo fname="Salar" lname="Farahmand" age="27" phone={phoneNumber} />            

            <StudentEducation degree="master" major="computer science" />

            <StudentAddress>
                <p>
                    <label>Town: </label>
                    <span>{address.town}</span>
                </p>
                <p>
                    <label>Street: </label>
                    <span>{address.street}</span>
                </p>
                <p>
                    <label>Alley: </label>
                    <span>{address.alley}</span>
                </p>
                <p>
                    <label>Number: </label>
                    <span>{address.number}</span>
                </p>
            </StudentAddress>

            <hr />
            <StundentInfo fname="John" lname="Doe" age="25" phone="+4912341234" />
        </div>
    );

};

export default Stundet;