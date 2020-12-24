import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import styles from "./SidePanelHeader.module.css";
import { Link } from "react-router-dom";
import Profile from "../../Content/Profile/Profile";
import Compose from "../../Content/Compose/Compose";
// figure out how routing works

const SidePanelHeader = () => {
    return (
      <section className={styles.sidePanelContainer}>
        <Link to="/profile">
          <img className={styles.profilePicture} src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/84075410_10157794951632170_7296700336943661056_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=K9dNi29C95cAX8Ba2ow&_nc_ht=scontent-sjc3-1.xx&oh=29da38578ad08b6ae5383c6e3aa3f95f&oe=600787CB" alt="profile"/>
        </Link>
        <h1 className={styles.brandName}>Compersion</h1>
        <Link to="/compose" className={styles.composeBtn}>
         <FontAwesomeIcon icon={faEdit} className="icon" />
        </Link>
      </section>
    )
}

export default SidePanelHeader;
