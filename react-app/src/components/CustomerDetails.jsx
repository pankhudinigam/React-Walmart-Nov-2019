import React from 'react';


const CustomerDetails = (props) => {

    console.log("CustomerDetails: ", props);

    return (
        <div>
            <h3>Customer Details: {props.match.params.id}</h3>
        </div>
    );
}

export default CustomerDetails;