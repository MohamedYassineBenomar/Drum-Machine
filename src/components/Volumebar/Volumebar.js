import React from 'react'
import './Volumebar.scss'


function Volumebar() {
 
  return (
    <div className='Volumebar'>
        <div className="Volumeline">
          <div
            id="draggable"
            className="Volumetick"
            draggable="true"
          ></div>
        </div>
    </div>
  )
}

export default Volumebar