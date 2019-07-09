import React from 'react';
import './App.css';
import Body from './components/body/component.body';
import Header from './components/header/component.header';

function App(){
  return (
    <div className='Container'>
      <Header></Header>
      <Body></Body>
    </div>
    );
}

export default App;
