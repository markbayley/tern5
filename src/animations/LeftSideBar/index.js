import React, { useState } from "react";
import PropTypes from "prop-types";
import { LeftSideBarContext } from "./LeftSideBarContext";
import TopSection from "./TopSection";
import LeftSection from "./LeftSection";
import "./style.scss";

const LeftSideBar = ({ searchmode, setMySearch }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <LeftSideBarContext.Provider
      value={{ isShowSidebar, setIsShowSidebar, searchmode }}
    >
      <div className="LeftSideBar__container">
        <div
          className={`LeftSideBar__container__overlay LeftSideBar__container__overlay--${isShowSidebar ? "show" : "hide"}`}
          role="button"
          onClick={() => setIsShowSidebar(false)}
          tabIndex={0}
          onKeyPress={() => { }}
        />
        <TopSection searchmode={searchmode} setMySearch={setMySearch} />
        <LeftSection searchmode={searchmode} setMySearch={setMySearch} />
      </div>
    </LeftSideBarContext.Provider>
  );
};

LeftSideBar.propTypes = {
  searchmode: PropTypes.string.isRequired,
  setMySearch: PropTypes.func.isRequired,
};

export default LeftSideBar;
