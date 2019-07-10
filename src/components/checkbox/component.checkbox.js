import React from 'react';
import './component.checkbox.css';

class Checkbox extends React.Component{

    render(){
        return(
            <div className="Checkbox">
                <label><input type="checkbox" onChange={(e)=>this.props.isChecked(e)} />{ this.props.message}</label>
            </div>
        );
    }

}

export default Checkbox;