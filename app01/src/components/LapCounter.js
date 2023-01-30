import { Component } from 'react';

class LapCounter extends Component {

    constructor(){
        super();
        this.state = {
            laps:0,
            rounds:0
        };
    }

    componentDidMount(){
        this.setState({laps:1});
    }

    stepUp = event => this.setState({laps:this.state.laps+1})

    stepDown = event => this.setState({laps:this.state.laps-1})

    componentDidUpdate(){
        if(this.state.laps<0){
            this.setState({laps:0});
        }else if(this.state.laps==10){
            this.setState({laps:0,rounds:this.state.rounds+1});
        }
    }

    render(){
        let {laps,rounds} = this.state;
        return (
            <div>
                <button onClick={this.stepDown}>-</button>
                <span><strong> {laps} laps amd {rounds} rounds </strong></span>
                <button onClick={this.stepUp}>+</button>
            </div>
        );
    }

}

export default LapCounter;