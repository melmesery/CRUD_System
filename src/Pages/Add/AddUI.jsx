import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../../Styles/Crud.module.css";

const AddUI = ({
  content,
  year,
  handleSubmit,
  handleContentChange,
  handleYearChange,
}) => {
  return (
    <div>
      <form className={`${styles.crud_form} shadow`} onSubmit={handleSubmit}>
        <input
          type="text"
          id="content"
          name="content"
          placeholder="Content"
          value={content || ""}
          onChange={handleContentChange}
        />
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Year"
          value={year || ""}
          onChange={handleYearChange}
        />
        <br />
        <input type="submit" value={"Add"} />
      </form>
      <Link to="/" className={styles.back}>
        Back
      </Link>
    </div>
  );
};

export default AddUI;
