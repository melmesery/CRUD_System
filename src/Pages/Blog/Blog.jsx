import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as styles from "../../Styles/Blog.module.css";
import BlogUI from "./BlogUI.jsx";
import Swal from "sweetalert2";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const loadData = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/blog`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data.Blogs);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const deleteBlog = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const response = await axios.delete(
          `${import.meta.env.VITE_BASE_URL}/blog/${id}`,
          {
            headers: {
              authorization: `Believe__${localStorage.getItem("token")}`,
            },
          }
        );

        if (response.data.message === "Not Authenticated") {
          toast.error("Not Authorized");
        } else {
          toast.success(response.data.message);
          loadData();
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={styles.home}>
      <BlogUI blogs={blogs} deleteBlog={deleteBlog} />
    </div>
  );
};

export default Blog;
