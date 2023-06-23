import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as styles from "../../Styles/Crud.module.css";
import AddUI from "./AddUI.jsx";

const Add = () => {
  const [content, setContent] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_BASE_URL}/blog`,
        { content, year },
        {
          headers: {
            authorization: `Believe__${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Item Added Successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={styles.crud}>
      <AddUI
        content={content}
        year={year}
        handleSubmit={handleSubmit}
        handleYearChange={handleYearChange}
        handleContentChange={handleContentChange}
      />
    </div>
  );
};

export default Add;
