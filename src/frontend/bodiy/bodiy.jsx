import { Route, Routes } from 'react-router-dom';
import React, { Component } from 'react';
import './bodiy.css';
import Asosiy_bolim from './asosiy_bolim/asosiy_bolim.jsx';
import Bolim1 from './boshqa_bolimlar/bolim1/bolim1.jsx';
import Bolim2 from './boshqa_bolimlar/bolim2/bolim2';
import Bolim3 from './boshqa_bolimlar/bolim3/bolim3';



export default class Bodiy extends Component {
  render() {
    return (
      <div className='bodiy'>      
        <Routes>
          <Route path='/home' Component={Asosiy_bolim} />
          <Route path='/home2' Component={Bolim1} />
          <Route path='/home3' Component={Bolim2} />
          <Route path='/home4' Component={Bolim3} />
        </Routes>
      </div>
    )
  }
}
