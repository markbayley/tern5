import React, { useState } from 'react';
// import '../App.css';

const BurgerMenu = () => {
  const [status, setStatus] = useState('close');
  return (
    <nav>
      <div
        className="BurgerMenu__container"
        role="button"
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
      >
        <i className={status}></i>
        <i className={status}></i>
        <i className={status}></i>
      </div>
    </nav>
  );
};

export default BurgerMenu;
