import React from "react";
import MainNavigation from "../navBar/MainNavigation";
import image from "../../assets/images/errorPic.png";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <div className={styles.errorMsg}>
        <h2>Oops the page you are trying to reach doesn't exist!</h2>
        <img src={image} alt="oops message" />
      </div>
    </>
  );
}

export default ErrorPage;
