import {useState} from "react";

const Counter = () => {

    const [counterVal, setCounterVal] = useState(0);

    function handleIncrease() {
        setCounterVal(counterVal + 1)
    }

    function handleDecrease() {
        setCounterVal(counterVal - 1)
    }

    return (
        <div>
            <button onClick={handleIncrease}>+</button>

            <span>{counterVal}</span>

            <button onClick={handleDecrease}>-</button>
        </div>
    )
}

export default Counter;