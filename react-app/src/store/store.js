import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
// const redux = require('redux');
// const createStore = redux.createStore;

//initial State
const initState = {
    count: 10,
    msg: "Hello Redux",
    customers: [],
    isAuth: true
}
//Reducer
const reducer = (state = initState, action) => {

    if(action.type === "INC_CTR"){

        return {
            ...state,
            count: state.count + 1, 
        }
    }
    if(action.type === "DECR_CTR"){

        return {
            ...state,
            count: state.count - 1
        }
    }
    if(action.type === "UPD_BY_CTR"){

        return {
            ...state,
            count: state.count + action.value
        }
    }
    if(action.type === "FETCH_CUSTOMERS"){

        return {
            ...state,
            customers: action.payload
        }
    }


    return state;

}

//Middleware

const logger = (store) => {
    return (next) => {
        return (action) => {
            // if action is an object
            console.log("action:", action);
            console.log("state:", store.getState());
            const result = next(action);
            console.log("updated state:", store.getState());
            return result;

            // if action is a function
            // action();
        }
    }
}

//Store
// export const store = createStore(reducer, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//export const store = createStore(reducer, applyMiddleware(logger));

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, 
                composeEnhancers(applyMiddleware(logger, thunk)));

