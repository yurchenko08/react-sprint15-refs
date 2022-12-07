import React, { Component } from 'react';

import './input.css';


export default class Input extends Component{
     render(){
        return <div>
            <span data-testid="operator-name"></span>
            <span>+38 0</span>
            <input 
                type="text" 
                data-testid="operator-input"
                />
            <span data-testid="check-icon"> - </span>
            <input type="text" 
                data-testid="phone-input"
                 />
        </div>;
    }
}
