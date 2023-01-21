import React from 'react';

function Button(props) {
  return ( 
    <button className={props.className}>
      <div className="icon">
        {props.icon}
      </div>
      {props.text}
    </button>
   );
}

export default Button;