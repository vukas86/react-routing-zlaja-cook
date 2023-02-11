import React from "react";
import styles from "./AboutMe.module.css";
import image from "../../assets/images/myself.jpg";

function AboutMe() {
  return (
    <>
      <div className={styles.myContainer}>
        <div className={styles.left}>
          <h2>Who Am I?</h2>
          <p>
            One evening, Māui and his brothers were making a hāngi for their
            evening meal. They had just finished heating the stones when the sun
            went down and it quickly became too dark to see. Māui was annoyed
            with having to eat his food in the dark. He stood in the light of
            the fire and addressed his people. "Every day we have to rush to do
            our chores and gather our food before the sun sets. Why should we be
            slaves to the sun? I will catch the sun before it rises, and teach
            it to travel slowly across the sky!" But one of the brothers was
            quick to criticise, not believing Māui could possibly do such a
            thing.
            <br></br>
            <br></br> "It would be impossible to catch the sun, he's much bigger
            than any bird you've ever caught!" "The heat and flames would surely
            burn you to death," said another. <br></br>
            <br></br>"I think he's got sunstroke," another added, and they all
            laughed. When they had quietened down, Māui took the sacred jawbone
            of his ancestor from his belt and waved it in the air. "I have
            achieved many things that were thought impossible gaining fire from
            Mahuika, catching the greatest fish in the world, descending to the
            underworld, and many more. With this magic jawbone, gifted by
            Murirangawhenua, and with your help, I will succeed in conquering
            the sun!". The majority of the people agreed that Māui had achieved
            many great feats, they decided to help Māui in his quest.
          </p>
        </div>
        <div className={styles.contentRight}>
          <img src={image} alt="myself" className={styles.image} />
        </div>
      </div>
    </>
  );
}

export default AboutMe;
