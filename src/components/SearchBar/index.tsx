import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisVertical,
  faMagnifyingGlass,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import "./style.scss";

const SearchBar = ({ onSearch }) => {
  const logoIcon = require("../../img/logo.png");
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  return (
    <div className="searchBar__container">
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
        <input ref={inputRef} type="text" placeholder="Search" />
        <button className="faMagnifyingGlass" type="submit" onClick={onClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <div className="faMicrophone">
          <FontAwesomeIcon icon={faMicrophone} />
        </div>
      </div>
      <div className="login">
        <div className="faEllipsisVertical">
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </div>
        <div className="loginBtn">
          <FontAwesomeIcon icon={faUserCircle} />
          <span>SIGN IN</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
