import React from 'react'
import './Drum.scss'
import SoundSwitch from '../PowerSwitch/PowerSwitch';
import BankSwitch from '../BankSwitch/BankSwitch';
import LogsScreen from '../LogsScreen/LogsScreen';

function Drum() {
  return (
    <div className='container'>
      <div className='drum'>
        <div className='rings-panel'>
          
          <button className='btns-rings'>
            a
          </button>
          <button className='btns-rings'>
            z
          </button>
          <button className='btns-rings'>
            e
          </button>
          <button className='btns-rings'>
            q
          </button>
          <button className='btns-rings'>
            s
          </button>
          <button className='btns-rings'>
            d
          </button>
          <button className='btns-rings'>
            w
          </button>
          <button className='btns-rings'>
            x
          </button>
          <button className='btns-rings'>
            c
          </button>
        </div>
        <div className='settings-panel'>
            <div className='power-holder'>
              <span><strong>Power</strong></span>
              <SoundSwitch />
            </div>
            <div className='logs-screen-holder'>
              <LogsScreen />
            </div>
            <div className='bank-holder'>
              <span>
                <strong>Bank</strong></span>
              <BankSwitch />
            </div>
        </div>
      </div> 
     
    </div>
  )
};

export default Drum;