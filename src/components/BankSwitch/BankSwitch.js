import React from 'react'
import './BankSwitch.scss'

function BankSwitch() {

  const handleSwitchClick = () => {
    const switch1 = document.querySelector("#root > div > div > div > div.settings-panel > div.bank-holder > div > div.switche1");
    const switch2 = document.querySelector("#root > div > div > div > div.settings-panel > div.bank-holder > div > div.switche2");
    const computedStyle = window.getComputedStyle(switch1);

    if (computedStyle.getPropertyValue('visibility') === 'hidden') {
      switch1.style.visibility = 'visible';
      switch2.style.visibility = 'hidden';
    } else {
      switch2.style.visibility = 'visible';
      switch1.style.visibility = 'hidden';
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

export default BankSwitch