import React from 'react';
import './component.body.css';

import Panel from './../panel/component.panel';


class Body extends React.Component{
    render(){
        return(
            <div className='body'>
              <Panel/>
            </div>
        );
    }
}

export default Body;