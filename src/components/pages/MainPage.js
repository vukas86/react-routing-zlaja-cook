import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <>
      <div className={styles.container}>
        <h3>Zlaja Cook</h3>
        <h1 className={styles.title}>Delicious recepies every day</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore error
          praesentium dolorem temporibus deleniti deserunt porro earum debitis
          numquam esse odio eum quia nostrum natus voluptate, quam cum, amet id!
        </p>
        <Link to="/aboutme">
          <div>
            <button>Find Out More</button>
          </div>
        </Link>
      </div>
    </>
  );
}
export default MainPage;
