import React from 'react';
import { AiOutlineCheck } from "react-icons/ai"

export default function CheckboxForm({Text, Style}) {

    return ( 
        <div className="checkbox--container">
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">{Text}</label>
        </div>
     );
}

// className="checkbox--global"