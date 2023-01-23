import React from 'react';

export default function CounterBtn(props) {

    let x = 1
    const style = {
        padding: `${x * 12}px ${x * 25}px`,
    }

    let count = 0

    return ( 
        <div className="counter--container">
            <div>
                <button onClick={() => {console.log("test-")}}>-</button>
            </div>
            <div>
                <p>{count}</p>
            </div>
            <div>
                <button onClick={() => {console.log("test+")}}>+</button>
            </div>
        </div>
     );
}