import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const Inc = () => setCount(count + 1);
    const Dec = () => setCount(count - 1);
    

    return(
        <>
            <h1>{count}</h1>
            <button onClick={Inc}>+</button>
            <button onClick={Dec}>-</button>

        </>
    );

}

export default Counter;