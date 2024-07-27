import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }
  return res.json();
}


const BlogPost = async ({ params }) => {
  
  const data = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/3399868/pexels-photo-3399868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse iure
          omnis illum tenetur aspernatur magni deserunt facere! Officiis fugit
          labore cumque cupiditate quod.
          <br />
          <br />
          Suscipit distinctio quaerat ducimus, impedit enim molestiae blanditiis
          labore repudiandae aliquam earum soluta quis necessitatibus, itaque
          illo nesciunt obcaecati laboriosam numquam ea sint ipsa? Porro
          mollitia libero sit vitae, asperiores enim, iure harum unde officia
          facilis ut corrupti deleniti nesciunt illo explicabo quis voluptatum
          odit!
          <br />
          <br />
          Dicta accusantium debitis impedit non quasi alias odio, atque rem nam
          placeat dolores dolor ut, consequatur, ex ipsam saepe. Temporibus eum
          ad molestias voluptate repellendus excepturi quisquam maiores, ratione
          doloribus sed incidunt.
        </p>
      </div>
    </div>
  );
}

export default BlogPost