import React from 'react';

export default function IconButton({Text, Size, icon}) {

    let x = 1
    let spacing = 'spacing'

    if(Size === "Small"){
        x = 0.5
        Text = ''
    }else if(Size === "Large"){
        x = 1.5
    } 

    if(Text === ''){
        spacing = ''
    }
    
    let style = {
        padding: `${x * 12}px ${x * 20}px`,
    }
    
    return ( 
        <button className={"globalIcons"} Size={Size} style={style}>
            <div className='icon'>
                {icon}
            </div>
            <p className={spacing}>
                {Text}
            </p>
        </button>
    );
    
}
