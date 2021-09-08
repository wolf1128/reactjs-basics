import React from 'react';
import './HelloWorld.css'

// function HelloWorld() {
const HelloWorld = () => {
    return (
        <>
            <p>
                <h1 className='app'>Hello world from React.js :)</h1>
            </p>
        </>
    );
    // return React.createElement('p', {}, React.createElement('h1', { className: 'app' }, 'Hello world from React.js :)'));
};

export default HelloWorld;