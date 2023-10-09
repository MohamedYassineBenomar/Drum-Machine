import React from 'react'
import './Volumebar.scss'


function Volumebar() {
  return (
    <div>Volumebar
        <div className="progress">
          <div className="progress-bar progress-bar-info" 
              role="progressbar" 
              aria-valuenow="50"
              aria-valuemin="0" 
              aria-valuemax="100" 
              style={{width: '50%'}}>
              50% Complete (info)
          </div>
        </div>
    </div>
  )
}

export default Volumebar