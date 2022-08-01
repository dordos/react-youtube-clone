import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faMicrophone,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import "./style.scss";

const HeaderBar = () => {
  const logoIcon = require("../../img/logo.png");
  return (
    <div className="headerBar__container">
      <div className="menu">
        <div className="faBars">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="faYoutube">
          <img src={logoIcon} alt="" />
          <span>YuTube</span>
        </div>
      </div>
      <div className="search">
        <input type="text" />
        <div className="faMagnifyingGlass">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="faMicrophone">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>
      <div className="login">
        <div className="faEllipsisVertical">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUserCircle} />
          <span>SIGN IN</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
