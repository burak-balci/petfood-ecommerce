import React from "react";
import styles from "./Video.module.css";

const Video = () => {
  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay loop muted>
        <source
          src="https://www.feliciapetfood.com/wp-content/uploads/2021/06/Felicia_intro_video.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
