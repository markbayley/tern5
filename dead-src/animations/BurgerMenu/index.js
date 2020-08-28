import React, { useState } from "react";
import "./style.scss";

const BurgerMenu = () => {
  const [status, setStatus] = useState("close");
  return (
    <nav>
      <div
        className="BurgerMenu__container"
        role="button"
        onClick={() => setStatus(status === "open" ? "close" : "open")}
        tabIndex={0}
        onKeyPress={() => { }}
      />
    </nav>
  );
};

export default BurgerMenu;
