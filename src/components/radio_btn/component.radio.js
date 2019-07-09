import React from 'react'

class Radio extends React.Component{
    render(){
        return(
            <div className="input">
                <label><input type="radio" value={this.props.value ? this.props.value : ''} name={this.props.name ? this.props.name : ''} /> {this.props.value ? this.props.value : ''}</label>
            </div>
        );
    }
}

export default Radio;