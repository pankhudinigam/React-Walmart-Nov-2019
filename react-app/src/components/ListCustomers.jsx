import React, {Component} from 'react';
import {Customer} from '../model/Customer';
import './ListCustomers.css';

class ListCustomer extends Component{

    state = {
        data: []
    };

    constructor(props){
        super(props);

        this.state.data.push(new Customer(1, "Google", "Bangalore"));
        this.state.data.push(new Customer(2, "Facebook", "Bangalore"));
        this.state.data.push(new Customer(3, "Reliance", "Mumbai"));
        this.state.data.push(new Customer(4, "Infosys", "Bangalore"));
    }

    renderCustomers = () => {
        return this.state.data.map((item, index) => {
            return (
                <div className="customer" key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Location: {item.location}</p>
                </div>
            );
        });
    }

    render(){

        return (
            <div>
                <h2>List Customers</h2>
                <p>The list of customers</p>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                    { this.state.data.length !== 0 ? this.renderCustomers() : <p>No Customers</p>}
                </div>
            </div>
        );

    }
}

export default ListCustomer;