import React from 'react';
import './component.input.css';

class Input extends React.Component {
    // onChange={(e) => this.props.inputChange(e)} 

    render(){
        return(
            <div className="input">
                <input type={this.props.type} className="input_text" placeholder={this.props.placeholder} onChange={(e) => this.props.inputChange(e)} ref="?"></input>
            </div>
        );
    }  
}
export default Input;