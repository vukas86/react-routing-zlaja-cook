import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

import logo from "../../assets/images/logoTr.png";

function MainNavigation() {
  return (
    <>
      <header>
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
            end
          >
            <img src={logo} alt="logoImg" class={styles.logoImg}></img>
          </NavLink>
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galery"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutme"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              About Me
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default MainNavigation;
