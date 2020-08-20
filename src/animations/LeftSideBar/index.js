import React, { useState } from 'react';
import TopSection from './TopSection';
import LeftSection from './LeftSection';
import './style.scss';

export const LeftSideBarContext = React.createContext({})

const LeftSideBar = ({searchmode, setMySearch}) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <LeftSideBarContext.Provider
      value={{ isShowSidebar, setIsShowSidebar, searchmode }}
    >
      <div className="LeftSideBar__container">
        <div
          className={`LeftSideBar__container__overlay LeftSideBar__container__overlay--${isShowSidebar ? 'show' : 'hide'}`}
          role="button"
          onClick={() => setIsShowSidebar(false)}
        ></div>
        <TopSection searchmode={searchmode} setMySearch={setMySearch}/>      
        <LeftSection searchmode={searchmode} setMySearch={setMySearch}/>
      </div>
    </LeftSideBarContext.Provider>
  );
};

export default LeftSideBar;
