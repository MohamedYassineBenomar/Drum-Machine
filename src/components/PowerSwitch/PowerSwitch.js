import React from 'react'
import './PowerSwitch.scss'
import { turnOnOff } from '../../reducers/drum-reduer';
import { useDispatch } from 'react-redux';

function PowerSwitch() {
  const dispatch = useDispatch();
  const handleSwitchClick = () => {
    dispatch(turnOnOff());
    const switch1 = document.querySelector("#root > div > div > div > div.settings-panel > div.power-holder > div > div.switche1");
    const switch2 = document.querySelector("#root > div > div > div > div.settings-panel > div.power-holder > div > div.switche2");
    const computedStyle = window.getComputedStyle(switch1);
    
    if (computedStyle.getPropertyValue('visibility') === 'hidden') {
      switch1.style.visibility = 'visible';
      switch2.style.visibility = 'hidden';
      document.querySelector("#root > div > div > div > div.settings-panel > div.logs-screen-holder > div > strong").textContent = "Power Off"
    
    } else {
      switch2.style.visibility = 'visible';
      switch1.style.visibility = 'hidden';
      document.querySelector("#root > div > div > div > div.settings-panel > div.logs-screen-holder > div > strong").textContent = "Power On"
    
    }
    
  }

  return (
    <div className='switch-background' onClick={handleSwitchClick}>
        <div className='switche1'>
            
        </div>
        <div className='switche2' >
            
        </div>
    </div>
  )
}

export default PowerSwitch