import React from 'react';
import './component.input.css';

class Input extends React.Component {
    render(){
        return(
            <div className="input">
                <input type={this.props.type} className="input_text" placeholder={this.props.placeholder}></input>
            </div>
        );
    }  
}
export default Input;