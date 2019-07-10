import React from 'react';
import './component.dropdown.css';

class Dropdown extends React.Component{
    getSelectItems(items){
       return items.map((el) => <option key={el}>{el}</option>);
    }
    render(){
     
        return(
           
            <div className="input">
                <select onChange={(e)=>this.props.selected_val(e)}>
                    {this.getSelectItems(this.props.options)}
                </select>
            </div>
        );
    }
}

export default Dropdown;