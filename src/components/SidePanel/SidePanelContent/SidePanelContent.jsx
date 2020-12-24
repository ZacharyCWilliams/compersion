import React from 'react'
import styles from "./SidePanelContent.module.css";
import { Link } from "react-router-dom";

const SidePanelContent = ({ data }) => {

  const list = data.map(item => {
    const { id, img, title } = item;
    return (
      <Link key={id} to={id} className={styles.container}>
        <img className={styles.image} src={img} />
        <h2 className={styles.title}>{title}</h2>
      </Link>
    )
  })

  return (
    <section className={styles.listContainer}>
      {list}
    </section>
  )
}

export default SidePanelContent;
