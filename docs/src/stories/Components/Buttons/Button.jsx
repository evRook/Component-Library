import React from 'react';

export default function Button({Type, Text, Size, icon}) {

  let x = 1
  if(Size === "Small"){
    x = 0.5
  }else if(Size === "Large"){
    x = 1.5
  } 

  let style = {
    padding: `${x * 12}px ${x * 25}px`,
  }

  return ( 
    <button className={"global ".concat(Type)} Size={Size} style={style}>
      <div className="icon">
        {icon}
      </div>
      {Text}
    </button>
   );

}