import React from 'react';
import './style.scss';
import {Button} from 'react-bootstrap';

const BurgerButton = ({ onClick }) => {
  return (
    <Button
      className="LeftSideBar__BurgerButton"
      role="button"
      variant='flat'
      onClick={onClick}
  
    >
    <img src="img/chevron.png" height="30px"/>Map
    </Button>
  );
};

export default BurgerButton;
