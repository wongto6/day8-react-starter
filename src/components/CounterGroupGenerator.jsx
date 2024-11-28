import {useState} from "react";
import CounterGroup from "./CounterGroup";

const CounterGroupGenerator = (props) => {

    const {size, setSize, setCounterSize, setSum, counterSize} = props

    function handleSetSize(event) {

        const inputSize = event.target.value

        if (inputSize < 0) {
            return setSize(0)
        } else if (inputSize > 20) {
            return setSize(20)
        }

        setSize(event.target.value)
    }

    function handleReset() {
        if (counterSize !== size) {
            setSum(0)
        }
        setCounterSize(size)
    }

    return (
        <div>
            <span>size:</span>
            <input min={0} max={20} type={"number"} value={size} onChange={handleSetSize}/>
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default CounterGroupGenerator;