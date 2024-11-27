import {useState} from "react";
import CounterGroup from "./CounterGroup";

const CounterGroupGenerator = (props) => {

    const {size, setSize, reset, setReset, setCounterSize} = props

    function handleSetSize(event) {

        const inputSize = event.target.value

        if (inputSize < 0 || inputSize > 20) {
            return setSize(0)
        }

        setSize(event.target.value)
    }

    function handleReset() {
        setCounterSize(size)
    }

    return (
        <div>
            <span>size:</span>
            <input value={size} onChange={handleSetSize} />
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default CounterGroupGenerator;