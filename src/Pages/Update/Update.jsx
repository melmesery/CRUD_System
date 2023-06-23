import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import * as styles from "../../Styles/Crud.module.css";
import UpdateUI from "./UpdateUI.jsx";

const Update = () => {
  const { id } = useParams();
  const [year, setYear] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BASE_URL}/blog/${id}`,
        { year, content },
        {
          headers: {
            authorization: `Believe__${localStorage.getItem("refresh_token")}`,
          },
        }
      )
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className={styles.crud}>
      <UpdateUI
        handleSubmit={handleSubmit}
        setYear={setYear}
        setContent={setContent}
        year={year}
        content={content}
      />
    </div>
  );
};

export default Update;
