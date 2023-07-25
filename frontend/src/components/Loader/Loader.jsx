import React from 'react';
import { BsSun } from 'react-icons/bs';
import './Loader.css';

function Loader() {
  return (
    <div className='sun_icon'>
      <BsSun style={{ height: '20vh', width: '20vw', color: 'yellow' }} />
    </div>
  );
}

export default Loader;
