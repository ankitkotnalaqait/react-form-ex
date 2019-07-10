import React from 'react';
import './component.panel.css';

import Inputtext from './../input_text/component.input';
import Radio from './../radio_btn/component.radio';
import Dropdown from './../dropdown/component.dropdown';
import Checkbox from './../checkbox/component.checkbox';
import Button from '../button/component.button';

class Panel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            password : '',
            gender : 'M' || 'F',
            car:'',
            isChecked : false
        }
    }
   
    onbtnClick = () => {
        //console.log(this.checkbox, "ref")
        if(this.state.isChecked){
            console.log('clicked!');
            console.log(this.state);
        }else{
            console.log('please check the checkbox first!')
        }
      
    }
    // inputChange={this.getName}
    render(){
        let options = ['select car:','Audi','BMW','Citron','Ford','Honda','Jaguar'];
        return(
        <div className="panel">
            <div className="pane">
            <div>
                <Inputtext type="text" placeholder="name" inputChange={(e)=>this.setState({name : e.target.value})}/>
            </div>
            <div>
                 <Inputtext type="text" placeholder="email" inputChange={(e)=>this.setState({email : e.target.value})}/>
            </div>
            <div>
                 <Inputtext type="password" placeholder="password" inputChange={(e)=>this.setState({password : e.target.value})}/>
            </div>
            <div className="radio_con">
                <Radio value="Male" name="gender" isRadioClicked = {(e)=>this.setState({gender : e.target.value})} /> <Radio value="Female" name="gender" isRadioClicked = {(e)=>this.setState({gender : e.target.value})}/>

            </div>
            <div> 
                <Dropdown options ={options} selected_val = {(e)=> this.setState({car : e.target.value})}></Dropdown>
            </div>
            <div className="radio_con">
                <Checkbox message="Agree ?" isChecked={(e) => this.setState({isChecked:e.target.checked})}  /> 
            </div>
            <div>
                <Button type="sumbit" onHandleClick={this.onbtnClick}/>
            </div>
            </div> 
        </div>
        );
    }
}
// ref={checkbox => {this.checkbox = checkbox}}
export default Panel;