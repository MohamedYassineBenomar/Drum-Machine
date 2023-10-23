import React, { useEffect } from 'react'
import './Volumebar.scss'


function Volumebar() {
  useEffect(() => {
    const volumeline = document.querySelector('.Volumeline');
    const draggables = document.querySelector('#draggable');

    if (draggables && volumeline) {
      volumeline.addEventListener('mousedown', (event) => {
        event.preventDefault(); // Prevents text selection while dragging
        console.log("drag start");

        const handleDrag = (e) => {
          const boundingRect = volumeline.getBoundingClientRect();
        
          let newLeft = e.clientX - boundingRect.left-13;
          console.log(e.clientX);
          if (newLeft < 0) {
            newLeft = 0;
          } else if (newLeft > 176) {
            newLeft = 176;
          }

          draggables.style.left = `${newLeft}px`;
        };

        const handleEndDrag = () => {
          document.removeEventListener('mousemove', handleDrag);
          document.removeEventListener('mouseup', handleEndDrag);
        };

        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', handleEndDrag);
      });
    }
  }, []);

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