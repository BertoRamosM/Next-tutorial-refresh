import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import Button from '@/components/Button/Button';


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/26976586/pexels-photo-26976586/free-photo-of-sunbath.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill
          alt="about picture"
          className={styles.image}
        />
        <div className={styles.imageText}>
          <h1 className={styles.imageTitle}>Digital Storytellers</h1>
          <h2 className={styles.imageDesc}>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque ut
            architecto inventore. Quae accusantium a voluptas quaerat dolores?
            Cumque suscipit praesentium nesciunt aliquam ullam dolorum explicabo
            quam obcaecati porro dolor commodi, at recusandae fugiat laboriosam
            pariatur repellat impedit?
            <br />
            <br />
            Natus dolores est sit architecto eius expedita ipsum vitae
            laudantium aliquid at quasi, perferendis doloribus hic sunt quod
            tenetur aperiam nam. Officia.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
            laudantium.
            <br />
            <br />
            Sunt temporibus iusto expedita delectus accusantium voluptatibus
            illo, veritatis aut!
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>
    </div>
  );
}

export default About;