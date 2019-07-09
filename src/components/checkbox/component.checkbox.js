import React from 'react';
import './component.checkbox.css';

class Checkbox extends React.Component{

    render(){
        return(
            <div className="Checkbox">
                <label><input type="checkbox" />{ this.props.message}</label>
            </div>
        );
    }

}

export default Checkbox;