/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import './style.scss';
import TopSection from '../TopSection';
import SearchEngine from '../../../components/bio-search/SearchEngine';
import {
  Button,
} from "react-bootstrap";
import BioMapEngine from '../../../components/bio-image-map/BioMapEngine';

const LeftSection = ({searchmode}) => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
    
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          onClick={() => setIsShowSidebar(false)}
          searchmode={searchmode}
        />
      </div>
      {searchmode === "Map" && (
            <div className="scroll">
                <SearchEngine embed />
        
            </div>
          )}
          {searchmode === "Images" && (
           <div >
            <Button searchmode={searchmode} 
            // onClick={() => setMySearch(searchmode === 'Map')}
             style={{width: "100%"}} variant='flat'>
               <img src="img/map1.png" width="100%" alt="map"/>
               Click the map to view
             
            </Button>
         
             <Button 
             style={{width: "100%"}} variant='flat'>
             <BioMapEngine embed />
            
             </Button>
         
             
           </div>
          )}
      
    
    </div>
  );
};

export default LeftSection;
