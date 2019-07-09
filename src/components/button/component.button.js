import React from 'react';
import './component.button.css'

class Button extends React.Component{
   
    render(){
        return(
            <div className="input">
                <button type={this.props.type} onClick={this.props.onHandleClick}>{this.props.type}</button>
            </div>
        );
    }
}

export default Button;