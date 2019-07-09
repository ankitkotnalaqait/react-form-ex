import React from 'react';
import './component.panel.css';

import Inputtext from './../input_text/component.input';
import Radio from './../radio_btn/component.radio';
import Dropdown from './../dropdown/component.dropdown';
import Checkbox from './../checkbox/component.checkbox';
import Button from '../button/component.button';

class Panel extends React.Component{
    
    onbtnClick = () => {
        console.log('clicked!');
    }
    
    render(){
        let options = ['select car:','Audi','BMW','Citron','Ford','Honda','Jaguar'];
        return(
        <div className="panel">
            <div className="pane">
            <div>
                <Inputtext type="text" placeholder="name"/>
            </div>
            <div>
                 <Inputtext type="text" placeholder="email"/>
            </div>
            <div>
                 <Inputtext type="password" placeholder="password"/>
            </div>
            <div className="radio_con">
                <Radio value="Male" name="gender"/> <Radio value="Female" name="gender"/>
            </div>
            <div> 
                <Dropdown options ={options}></Dropdown>
            </div>
            <div className="radio_con">
                <Checkbox message="Agree ?"/> 
            </div>
            <div>
                <Button type="sumbit" onHandleClick={this.onbtnClick}/>
            </div>
            </div> 
        </div>
        );
    }
}
export default Panel;