import CounterGroupGenerator from "./CounterGroupGenerator";
import {useState} from "react";
import CounterGroup from "./CounterGroup";
import './MultipleCounter.css'

const MultipleCounter = () => {

    const [size, setSize] = useState(0);
    const [counterSize, setCounterSize] = useState(0);
    const [sum, setSum] = useState(0);

    return (
        <div className={'multiple-counter'}>
            <CounterGroupGenerator size={size} setSize={setSize}
                                   setCounterSize={setCounterSize} setSum={setSum} counterSize={counterSize}/>
            <span>sum: {sum}</span>
            <CounterGroup counterSize={counterSize} setSum={setSum}/>
        </div>
    )
}

export default MultipleCounter;