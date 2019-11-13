import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {createINCaction, createDECRaction} from '../store/action-creators';
import * as actionCreators from '../store/action-creators';


class ReduxDemo extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        return (
            <div>
                <h3>Redux Demo</h3>
                <h4>Count: {this.props.ctr}</h4>
                <div>
                    <button onClick={() => { this.props.inc() }}>Increment</button>
                    <button onClick={this.props.decr}>Decrement</button>
                </div>
                <div>
                    {this.props.customers.map((item, index) => {
                        return (
                            <div key={index}>
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

        );
    }
}
//Mapping Redux State to React props
const mapStateToProps = (state) => {
    return {
        ctr: state.count,
        customers: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        // inc: () => {dispatch({type: "INC_CTR"})},
        // decr: () => {dispatch({type: "DECR_CTR"})}

        inc: () => { dispatch(actionCreators.createINCaction()) },
        decr: () => { dispatch(actionCreators.createDECRaction()) },
        fetch: () => { dispatch(actionCreators.createFetchaction()) }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo);

