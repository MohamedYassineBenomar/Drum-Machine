import React from 'react'
import './Drum.scss'
import SoundSwitch from '../PowerSwitch/PowerSwitch';
import BankSwitch from '../BankSwitch/BankSwitch';
import LogsScreen from '../LogsScreen/LogsScreen';
import Volumebar from '../Volumebar/Volumebar'
import { useSelector } from 'react-redux';
import { useLayoutEffect, useCallback } from 'react';

function Drum() {
  const volume = useSelector((state) => state.rootreducer.volume);
  const power = useSelector((state) => state.rootreducer.power);

  const playAudio = useCallback((src) => {
    const audio = new Audio(src);
    audio.play();
  }, [power]);
 
  useLayoutEffect(() => {

    document.addEventListener('keydown', function(event) {
      
      var btn;
      switch (event.key) {
        case 'a':
          btn = document.getElementById('a_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3');
          break;
        case 'z':
          btn = document.getElementById('z_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3');
          break;
        case 'e':
          btn = document.getElementById('e_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3');
          break;
        case 'q':
          btn = document.getElementById('q_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3');
          break;
        case 's':
          btn = document.getElementById('s_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3');
          break;
        case 'd':
          btn = document.getElementById('d_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
          break;
        case 'w':
          btn = document.getElementById('w_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3');
          break;
        case 'x':
          btn = document.getElementById('x_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3');
          break;
        case 'c':
          btn = document.getElementById('c_note');
          playAudio('https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3');
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
  }, [power, volume,playAudio]);
  

 

  /*const addeventlisteners = () => {

  }*/
  const handleplaysound = () => {
    document.getElementById('a_audio').play();
   
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