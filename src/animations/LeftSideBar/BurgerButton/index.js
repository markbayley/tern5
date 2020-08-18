import React, {useContext} from 'react';
import './style.scss';
import {Button} from 'react-bootstrap';
import { LeftSideBarContext } from '../index';

const BurgerButton = ({ onClick, searchmode }) => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
 
  return (
    <Button
      className="LeftSideBar__BurgerButton"
      role="button"
      variant='toggle'
      onClick={onClick}
    >
    {isShowSidebar && <img src="img/chevronright.png" height="30px"/>}
    {!isShowSidebar && (searchmode === 'Map' ? <><img src="img/chevron.png" height="30px"/>Images </> : <><img src="img/chevron.png" height="30px"/>Map </>)}
    </Button>
  );
};

export default BurgerButton;
