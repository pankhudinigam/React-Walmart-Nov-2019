//import {createStore} from 'redux';

const redux = require('redux');
const createStore = redux.createStore;

//initial State
const initState = {
    count: 10,
    msg: "Hello Redux"
}
//Reducer
const reducer = (state = initState, action) => {

    if(action.type === "INC_CTR"){

        return {
            ...state,
            count: state.count + 1
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


    return state;

}

//Store
const store = createStore(reducer);    
console.log(store.getState());

//Subscribe

store.subscribe(() => {
    console.log("Subscribe", store.getState());
})


//Dispatch Action

store.dispatch({
    type: "INC_CTR"
});
//console.log(store.getState());

store.dispatch({
    type: "DECR_CTR"
});
//console.log(store.getState());

store.dispatch({
    type: "UPD_BY_CTR",
    value: 10
});
//console.log(store.getState());

