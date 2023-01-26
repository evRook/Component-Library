import React, { useState } from 'react';

export default function CounterBtn({Min, Max, Value}) {

    let x = 1;

    const style = {
        padding: `${x * 12}px ${x * 25}px`,
    }

    let [count, setCount] = useState(Value);

    function countUp() {
        if(count < Max) {
            setCount(count + 1)
        }
    }

    function countDown() {
        if(count > Min) {
            setCount(count - 1)
        }
    }

    return ( 
        <div className="counter--container">
            <div>
                <button className="counter--button" onClick={countDown}>-</button>
            </div>
            <div>
                <p className="counter--text">{count}</p>
            </div>
            <div>
                <button className="counter--button" onClick={countUp}>+</button>
            </div>
        </div>
     );
}