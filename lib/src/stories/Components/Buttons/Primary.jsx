import React from 'react';

export default function Button({Type, Text, Size = "Medium"}) {

  let x = 1
  if(Size === "Small"){
    x = 0.5
  }else if(Size === "Large"){
    x = 1.5
  } 

  let style = {
    padding: `${x * 12}px ${x * 25}px`,
    transitionDuration: "0.1s",
  }

  let visited = false

  function Test(){
    if(visited === true){
      console.log("true")
      visited = false
    }else if(visited === false){
      console.log("false")
      visited = true
    }
  }

  return ( 
    <button 
      className={"global ".concat(Type)} 
      Size={Size} 
      style={style} 
      onClick={Test}
    >
      {Text}
    </button>
   );

}