import React from 'react'
import styles from "./darkmode.module.css"

const DarkMode = () => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>🌜</div>
      <div className={styles.icon}>🌞</div>
       <div className={styles.ball} />
    </div>
  );
}

export default DarkMode