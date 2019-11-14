import React, { Component, PureComponent } from 'react';
import { Customer } from '../model/Customer';
import './ListCustomers.css';
import CustomerForm from './CustomerForm';
import Axios from 'axios';
import {Link} from 'react-router-dom';

class ListCustomer extends PureComponent {

    //immutable
    state = {
        data: [],
        addMode: false,
        selectedCustomer: null
    };

    constructor(props) {
        super(props);

        
        this.url = process.env.REACT_APP_CUSTOMERS_URL;
        console.log(this.url);
        // this.state.data.push(new Customer(1, "Google", "Bangalore"));
        // this.state.data.push(new Customer(2, "Facebook", "Bangalore"));
        // this.state.data.push(new Customer(3, "Reliance", "Mumbai"));
        // this.state.data.push(new Customer(4, "Infosys", "Bangalore"));
        console.log("[ListCustomer constructor]: ", this.props);
    }



    componentWillMount() {
        console.log("[ListCustomer componentWillMount]")
    }
    async componentDidMount() {
        console.log("[ListCustomer componentDidMount]");

        try {
            const response = await Axios.get(this.url);
            this.setState({
                data: response.data
            })
        } catch (error) {
            alert("Failed to fetch data");
        }
    }
    componentWillReceiveProps() {
        console.log("[ListCustomer componentWillReceiveProps]")
    }
    // shouldComponentUpdate(){
    //     console.log("[ListCustomer shouldComponentUpdate]")
    //     return true;
    // }
    componentWillUpdate() {
        console.log("[ListCustomer componentWillUpdate]")
    }
    componentDidUpdate() {
        console.log("[ListCustomer componentDidUpdate]")
    }








    delete = async (index, evt) => {

        evt.preventDefault();
        //console.log(index);
        // this.state.data.splice(index, 1);
        // this.setState({
        //     data: this.state.data
        // });

        try {

            const id = this.state.data[index].id;
            const response = await Axios.delete(this.url + "/" + id);
            //create a copy
            const copy = [...this.state.data];
            copy.splice(index, 1);
            this.setState({
                data: copy
            });

        } catch (error) {
            alert("Failed to delete");
        }
    }
    add = async (customer) => {

        try {

            const response = await Axios.post(this.url, customer);
            alert("saved");
            const customers = [...this.state.data];
            customers.push(customer);
            this.setState({
                data: customers
            });

        } catch (error) {
            alert("Failed to save");
        }


    }
    edit = (index, evt) => {

        evt.preventDefault();
        this.setState({
            selectedCustomer: this.state.data[index]
        });

    }
    update = async (updatedCustomer) => {


        try {

            const response = await Axios.put(this.url, updatedCustomer);
            const customers = [...this.state.data];
            const index = customers.findIndex(item => item.id === this.state.selectedCustomer.id);
            customers[index] = updatedCustomer;

            this.setState({
                data: customers,
                selectedCustomer: null
            });
            alert("saved");

        } catch (error) {
            alert("failed to save");
        }



    }

    // nav = (id) =>{
    //     window.localStorage.setItem("custID", id);
    // }
    renderCustomers = () => {
        return this.state.data.map((item, index) => {
            return (
                <div className="customer" key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Location: {item.location}</p>
                    <div>
                        {/* <button onClick={this.delete.bind(this, index)}>Delete</button> */}
                        {/* <button onClick={() => {this.delete(index)}}>Delete</button> */}
                        <a href="#" onClick={(evt) => { this.delete(index, evt) }}>Delete</a>
                        &nbsp;
                        <a href="#" onClick={(evt) => { this.edit(index, evt) }}>Edit</a>
                        &nbsp;
                        <Link to={"customers" + "/" + item.id}>Details</Link>
                        {/* <Link to={"customersDetails"} onClick={()=> {this.nav(item.id)}}>Details</Link> */}
                    </div>
                </div>
            );
        });
    }
    addNew = (evt) => {

        evt.preventDefault();
        this.setState({
            addMode: true
        });
    }

    render() {

        console.log("[ListCustomer render]")

        return (
            <div>
                <h2>List Customers</h2>
                <p>The list of customers</p>
                <p>
                    <a href="#" onClick={this.addNew}>Add New</a>
                </p>
                <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                    {this.state.data.length !== 0 ? this.renderCustomers() : <p>No Customers</p>}
                </div>
                <div>
                    {this.state.addMode ?
                        <CustomerForm onSave={this.add}
                            onCancel={() => { this.setState({ addMode: false }) }} /> : null}
                </div>
                <div>
                    {this.state.selectedCustomer ?
                        <CustomerForm
                            key={this.state.selectedCustomer.id}
                            customer={this.state.selectedCustomer}
                            onSave={this.update}
                            onCancel={() => this.setState({ selectedCustomer: null })} /> : null}
                </div>


            </div>
        );

    }
}

export default ListCustomer;