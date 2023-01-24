import React from 'react';

export default function DropdownForm({Text, Size}) {

    let x = 1
    let y = 1

    if(Size === "Small"){
      x = 0.5
      y = 2
    }else if(Size === "Medium"){
      x = 1  
      y = 3
    }else if(Size === "Large"){
      x = 1.2
      y = 3
    } 
  
    let style = {
        width: `${y}00px`,
        padding: `${x * 12}px ${x * 25}px ${x * 12}px 12px`,
    }

    return ( 
        <div className="dropdown--container">
            <select Size={Size} style={style}>
                <option value="test" disable selected hidden>{Text}</option>
                <option value="test">Default</option>
                <option value="test">Primary</option>
                <option value="test">Danger</option>
                <option value="test">Success</option>
                <option value="test">Warning</option>
            </select>
        </div>
     );
}