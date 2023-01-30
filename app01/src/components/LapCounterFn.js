import { useEffect, useState } from 'react';

const LapCounterFn = props => {

    let [laps, setLaps] = useState(0);
    let [rounds, setRounds] = useState(0);

    const stepUp = event => setLaps(laps + 1);

    const stepDown = event => setLaps(laps - 1);

    useEffect(() => { setLaps(1); },[]);

    useEffect(() => {
        if(laps<0) {
            setLaps(0);
        }else if(laps==10){
            setRounds(rounds+1);
            setLaps(0);
        }
    },[laps]);

    return (
        <div>
            <button onClick={stepDown}>-</button>
            <span><strong> {laps} laps amd {rounds} rounds </strong></span>
            <button onClick={stepUp}>+</button>
        </div>
    );
}

export default LapCounterFn;