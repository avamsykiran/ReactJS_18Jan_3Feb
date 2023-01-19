import { Component } from "react";

class QuantityCounter extends Component {
    constructor(props){
        super(props);
        this.state ={
            count:window.parseInt(props.initValue??0)
        }
    }

    stepUp = event => {
        this.setState({count: this.state.count+1});
    }

    stepDown = event => {
        this.setState({count: this.state.count-1});
    }

    render(){
        return (
            <div>
                <button onClick={this.stepDown}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.stepUp}>+</button>
            </div>
        );
    }
}

export default QuantityCounter;