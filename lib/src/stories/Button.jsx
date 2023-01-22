import React from 'react';

function Button({className, text, icon, type = "Medium"}) {

  let scale = 1
  if(type === "Small"){
    scale = 0.5
  }else if(type === "Large"){
    scale = 1.5
  }

  return ( 
    <button className={className} type={type}>
      <div className="icon">
        {icon}
      </div>
      {text}
    </button>
   );

}

export default Button;