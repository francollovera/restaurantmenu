import React from 'react';
import './edicion.css'; 

import diapo0 from './fotos/0.png';
import diapo1 from './fotos/1.png';
import diapo2 from './fotos/2.png';
import diapo3 from './fotos/3.png';
import diapo4 from './fotos/4.png';
import diapo5 from './fotos/5.png';
import diapo6 from './fotos/6.png';
import diapo7 from './fotos/7.png';
import diapo8 from './fotos/8.png';
import diapo9 from './fotos/9.png'; 


function Menu() {
  return (
    <div>
      <div className="master">
        <img src={diapo0} alt='diapo0' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo1} alt='diapo1' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo2} alt='diapo2' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo3} alt='diapo3' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo4} alt='diapo4' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo5} alt='diapo5' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo6} alt='diapo6'  style={{ width: '100%', height: 'auto' }} className="responsive-image" />
        <img src={diapo7} alt='diapo7' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
      </div>
      <img src={diapo8} alt='diapo8' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
      <img src={diapo9} alt='diapo9' style={{ width: '100%', height: 'auto' }} className="responsive-image" />
    </div>
  );
}

export default Menu;
