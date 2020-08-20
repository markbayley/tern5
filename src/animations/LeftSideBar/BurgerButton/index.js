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
    {isShowSidebar && <i class="fa fa-chevron-right fa-lg"></i>}
    {!isShowSidebar && (searchmode === 'Map' ? <><i class="fa fa-chevron-left fa-lg"></i>Images </> : <><i class="fa fa-chevron-left fa-lg"></i>Map </>)}
    </Button>
  );
};

export default BurgerButton;
