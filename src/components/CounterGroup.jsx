import Counter from "./Counter";

const CounterGroup = (props) => {

    const {counterSize, setSum, sum} = props

    let array = [];

    for (let i = 1; i <= counterSize; i++) {
        array.push(counterSize)
    }

    return (
        <div>
            {[array.map((i, index) => {
                return <Counter key={index + props.counterSize} setSum={setSum} sum={sum}/>
            })]}
        </div>
    )
}

export default CounterGroup;