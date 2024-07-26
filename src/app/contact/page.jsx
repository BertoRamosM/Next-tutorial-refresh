import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import Button from '@/components/Button/Button';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let`s keep in Touch!</h1>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/contact.png"
            alt="contact link"
            fill
            className={styles.image}
          />
        </div>

        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea className={styles.textArea} cols="30" rows="10" placeholder='Your message...'></textarea>
          <Button url="#" text="Send"/>
        </form>
      </div>
    </div>
  );
}

export default Contact