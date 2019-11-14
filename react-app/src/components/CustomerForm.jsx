import React, {Component} from 'react';
import { Customer } from '../model/Customer';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class CustomerForm extends Component{

    state = {
        customer: new Customer(0, "", "")
    }

    constructor(props){
        super(props);
        console.log("CustomerForm constructor:", this.props);

        this.initState = {...this.state};
        if(this.props.customer){
            this.state.customer = this.props.customer;
        }
    }
    // static getDerivedStateFromProps(nextProps, currentState){

    //     console.log("getDerivedStateFromProps");
    //     if(nextProps.customer && currentState.customer.id !== nextProps.customer.id){
            
    //         return {
    //             customer: nextProps.customer
    //         };
    //     }
    //     else{
    //         return null;
    //     }
    // }

    change = (evt) => {

        const value = evt.target.value;

        const customer = {...this.state.customer};
        const propertyName = evt.target.name;
        if(propertyName === "id"){
            customer[propertyName] = parseInt(value);
        }
        else{
            customer[propertyName] = value
        }
         

        this.setState({
            customer
        });

    }

    save = () => {

        this.props.onSave(this.state.customer);
        this.setState(this.initState);
    }

    render(){
        return (
            <div>
                <h4>Customer Form</h4>
                <fieldset>
                    <p>
                        Id: 
                    </p>
                    <div>
                        <input type="number" name="id"
                            value={this.state.customer.id} onChange={this.change}/>
                    </div>
                    <p>
                        Name: 
                    </p>
                    <div>
                        <input name="name" value={this.state.customer.name} onChange={this.change}/>
                    </div>
                    <p>
                        Location: 
                    </p>
                    <div>
                        <input  name="location" value={this.state.customer.location} onChange={this.change}/>
                    </div>
                    <div>
                        <button onClick={this.save}>Save</button> &nbsp; &nbsp;
                        <button onClick={() => {this.props.onCancel()}}>Cancel</button>
                    </div>
                </fieldset>
            </div>
        );
    }
}

CustomerForm.propTypes = {

    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    title: PropTypes.string

}



export default withRouter(CustomerForm);