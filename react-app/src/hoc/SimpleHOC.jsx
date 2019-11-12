import React from 'react';

//HOC
const SimpleHOC = (WrappedComponent) => {
    //returns component
    return (props) => {

        return (
            <div style={{border: "2px solid red"}}>
                <WrappedComponent {...props}/>
            </div>
        );

    }
} 

export default SimpleHOC;