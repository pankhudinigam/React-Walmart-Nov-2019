import React from 'react';


const Hello = (props) => {

    return (
        <div>
            <h3>Hello {props.message}</h3>
            <p>This is a react functional component</p>
            <p>Generated Time {new Date().toTimeString()}</p>
            <div>
                {props.children}
            </div>
        </div>
    );

}

export default Hello;



