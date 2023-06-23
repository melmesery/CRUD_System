import React from "react";
import { Link } from "react-router-dom";
import * as styles from "../../Styles/Blog.module.css";
import add from "../../Assets/add.png";
import { toast } from "react-toastify";

const BlogUI = ({ blogs, deleteBlog }) => {
  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/auth/logout`,
        {
          method: "PATCH",
          headers: {
            authorization: `${
              import.meta.env.VITE_BEARER_KEY
            }${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        window.location.href = "/";
        localStorage.clear();
      } else {
        toast.error("Unable to log out");
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div>
      <button onClick={handleLogout} className={styles.logout}>
        Log Out
      </button>
      <Link to="/blog/add" className={styles.btn_productLink}>
        <img src={add} />
      </Link>
      <table className={`${styles.styled_table} shadow`}>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => {
            return (
              <tr key={blog._id}>
                <th scope="row">{index + 1}</th>
                <td className={styles.data}>{blog.content}</td>
                <td className={styles.data}>{blog.addedBy.userName}</td>
                <td className={styles.data}>{blog.year}</td>
                <td>
                  <Link to={`/blog/update/${blog._id}`}>
                    <button className={`${styles.btn} ${styles.btn_edit}`}>
                      Edit
                    </button>
                  </Link>
                  <button
                    className={`${styles.btn} ${styles.btn_delete}`}
                    onClick={() => deleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/blog/view/${blog._id}`}>
                    <button className={`${styles.btn} ${styles.btn_view}`}>
                      View
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BlogUI;
