import React, {Fragment} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


const ProtectedRoute = (props) => {

    const Component = props.component;
    
    return (
        <Fragment>
                <Route path={props.path} exact={props.exact}>
                    {props.isAuth ? <Component/> : <Redirect to="/"/>}
                </Route>
       </Fragment>
    )
}

const mapStateToProps = (state) =>{
    return {
        isAuth: state.isAuth
    }
};

export default connect(mapStateToProps)(ProtectedRoute);
