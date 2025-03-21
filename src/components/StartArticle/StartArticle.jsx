import React from "react";
import styles from "./StartArticle.module.css";
import TextBlock from "../TextBlock/TextBlock";
import bannerBackground from "../../assets/UI/banner_background.png";
import ContinueIcon from "../../assets/icons/continue.svg";

function StartArticle({ content }) {

  const contentAfterBanner = content.slice(1);

  return (
    <div className={styles.intro}>
      <article>
        <div className={styles.welcome}>
          <h1>Zano Docs</h1>
          <span>
            Welcome to Zano's comprehensive documentation, your gateway to
            understanding and engaging with our unique cryptocurrency ecosystem.
            This guide is designed to cater to both newcomers and experienced
            developers, providing a deep dive into Zano's features,
            functionalities, and opportunities.
          </span>
        </div>
        <TextBlock content={content[0]} />
        <br />

        <div className={styles.banner_wrapper}>
          <img src={bannerBackground} className={styles.banner_wrapper__bg} />

          <div className={styles.banner_wrapper__content}>
            <h4 className={styles.title}>Exchange integration full guide</h4> <ContinueIcon className={styles.continueIcon} />
          </div>
        </div>

        {contentAfterBanner.map((item) => (
          <TextBlock key={item.title} content={item} />
        ))}
      </article>
    </div>
  );
}

export default StartArticle;
