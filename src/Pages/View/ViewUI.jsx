import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../../Styles/View.module.css";

const ViewUI = ({ item }) => {
  return (
    <div>
      <div className={`${styles.card} shadow`}>
        <h6>ID :</h6>
        <div className={styles.card_data}>
          <span>{item._id}</span>
        </div>
        <h6>Title :</h6>
        <div className={styles.card_data}>
          <span>{item.content}</span>
        </div>
        <h6>Year :</h6>
        <div className={styles.card_data}>
          <span>{item.year}</span>
        </div>
      </div>
      <Link to="/" className={styles.vieW}>
        <input type="button" value="Back" className={styles.view_back} />
      </Link>
    </div>
  );
};

export default ViewUI;
