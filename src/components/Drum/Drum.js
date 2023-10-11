import React from 'react'
import './Drum.scss'
import SoundSwitch from '../PowerSwitch/PowerSwitch';
import BankSwitch from '../BankSwitch/BankSwitch';
import LogsScreen from '../LogsScreen/LogsScreen';
import Volumebar from '../Volumebar/Volumebar'
import { useEffect } from 'react';

function Drum() {
  useEffect(() => {
    document.addEventListener('keydown', function(event) {
      var btn;
      switch (event.key) {
        case 'a':
          btn = document.getElementById('a_note');
          break;
        case 'z':
          btn = document.getElementById('z_note');
          break;
        case 'e':
          btn = document.getElementById('e_note');
          break;
        case 'q':
          btn = document.getElementById('q_note');
          break;
        case 's':
          btn = document.getElementById('s_note');
          break;
        case 'd':
          btn = document.getElementById('d_note');
          break;
        case 'w':
          btn = document.getElementById('w_note');
          break;
        case 'x':
          btn = document.getElementById('x_note');
          break;
        case 'c':
          btn = document.getElementById('c_note');
          break;
        default:
          return; // Ignore keys other than a, z, e, q, s, d, w, x, c
      }
  
      if (btn) {
        btn.classList.add('btn-active'); // Add a CSS class that triggers the button's active state
        setTimeout(function() {
          btn.classList.remove('btn-active'); // Remove the CSS class after a short delay
        }, 100);
        btn.click();
      }
    });
  }, []);
  

 

  /*const addeventlisteners = () => {

  }*/
  const handleplaysound = (event) => {
    console.log(event.target.innerText)
  }
  return (
    <div className='container'>
      <div className='drum'>
        <div className='rings-panel'>
          
          <button id='a_note' className='btns-rings' onClick={handleplaysound}>
            a
          </button>
          <button id='z_note' className='btns-rings'>
            z
          </button>
          <button id='e_note' className='btns-rings'>
            e
          </button>
          <button id='q_note' className='btns-rings'>
            q
          </button>
          <button id='s_note' className='btns-rings'>
            s
          </button>
          <button id='d_note' className='btns-rings'>
            d
          </button>
          <button id='w_note' className='btns-rings'>
            w
          </button>
          <button id='x_note' className='btns-rings'>
            x
          </button>
          <button id='c_note' className='btns-rings'>
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
            <div className='volume-bar-holder'>
              <Volumebar />
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