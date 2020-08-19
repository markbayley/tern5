import React, { useContext } from 'react';
import BurgerButton  from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import './style.scss';

const TopSection = ({searchmode}) => {
  const { setIsShowSidebar } = useContext(LeftSideBarContext);
  console.log('ts' , searchmode);
  return (
    <div className="LeftSideBar__TopSection">
      <BurgerButton
        onClick={() => setIsShowSidebar(true)}
        searchmode={searchmode}
      />
    
    </div>
  );
};

export default TopSection;
