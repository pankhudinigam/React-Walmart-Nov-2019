import React, {Component} from 'react';
import SimpleHOC from '../hoc/SimpleHOC';
//bind
// arrow functions(ES6)

class Counter extends Component{

    //ES 7
    state = {
        count: 5
    };
    

    constructor(props){
        super(props);

        this.inc = this.inc.bind(this);
        //ES6
        // this.state = {
        //     count : 5
        // };
    }


    inc = function(evt){
        //console.log("in inc: ", evt);
        //this.state.count++;

        //ASync
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count);
        });
        
    }
    //ES7
    decr = ()=>{

        this.setState({
            count: this.state.count - 1
        }, () => {
            console.log(this.state.count);
        });
    }

    change = (evt) => {

        this.setState({
            count: parseInt(evt.target.value) 
        });
    }

    update = () => {
        this.setState({
            count: parseInt(this.valueRef.value)
        })
    }
    // setRef = (inpRef) => {
    //     this.valueRef = inpRef;
    // }

    render(){
        
        return (
            <div>
                <h4>Counter =>  {this.props.title}</h4>
                <p>Count: {this.state.count}</p>
                <div>
                    <button id="incBtn" onClick={this.inc}>Increment</button>&nbsp; &nbsp;
                    <button onClick={this.decr}>Decrement</button>
                </div>
                <div>
                    {/* Controlled Input */}
                    Count: <input type="number" 
                            value={this.state.count} onChange={this.change}/>
                </div>
                <div>
                    {/* Uncontrolled Input */}
                    Value: <input type="number" ref={(ref) => {this.valueRef = ref}} /> &nbsp;
                    <button onClick={this.update}>Update</button>
                </div>
                
            </div>
        );
    }
}


//export default SimpleHOC(Counter);
export default Counter;