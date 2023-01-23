import React, { useState } from 'react';

export default function CounterBtn(max) {

    let x = 1;

    const style = {
        padding: `${x * 12}px ${x * 25}px`,
    }

    let [count, setCount] = useState(0);

    function countUp() {
        if(count < 10) {
            setCount(count + 1)
        }
    }

    function countDown() {
        if(count > 0) {
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