import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

import logo from "../../assets/images/logoTr.png";

function MainNavigation() {
  return (
    <>
      <header>
        <div>
          <Link to="/">
            <img src={logo} alt="logoImg" class={styles.logoImg}></img>
          </Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/galery">Gallery</Link>
          </li>
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default MainNavigation;
