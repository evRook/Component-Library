import React from 'react';

export default function DropdownForm({Text}) {
    return ( 
        <div className="dropdown--container">
            <select id="dropdown">
                <option value="test" disable selected hidden>Test</option>
                <option value="test">Default</option>
                <option value="test">Primary</option>
                <option value="test">Danger</option>
                <option value="test">Success</option>
                <option value="test">Warning</option>
            </select>
        </div>
     );
}