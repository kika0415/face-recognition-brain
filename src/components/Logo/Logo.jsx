import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';

import brain from './brain.png';

const Logo = () => (
  <div className='ma4 mt0'>
    <Tilt className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: 150, width: 150 }}>
      <div className='Tilt-inner'>
        <img src={brain} width='150px' height='150px' alt='logo' />
      </div>
    </Tilt>
  </div>
);

export default Logo;
