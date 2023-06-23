import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../../Styles/Crud.module.css";

const UpdateUI = ({ content, year, handleSubmit, setContent, setYear }) => {
  return (
    <div>
      <form className={`${styles.crud_form} shadow`} onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={content || ""}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Year"
          value={year || ""}
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <input type="submit" value={"Update"} />
      </form>
      <Link to="/" className={styles.back}>
        Back
      </Link>
    </div>
  );
};

export default UpdateUI;
