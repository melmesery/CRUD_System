import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as styles from "../../Styles/View.module.css";
import ViewUI from "./ViewUI.jsx";

const View = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/blog/${id}`, {
        headers: {
          authorization: `Believe__${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setItem(response.data.Blog));
  }, [id]);
  return (
    <div className={styles.view}>
      <ViewUI item={item} />
    </div>
  );
};

export default View;
