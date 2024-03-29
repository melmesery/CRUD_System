import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookAuth from "../Components/FacebookAuth.jsx";
import GoogleAuth from "../Components/GoogleAuth.jsx";
import Show from "../Components/Show.jsx"; 
import style from "../Styles/Auth.module.css";

const ResigterUI = ({
  userName,
  email,
  password,
  cPassword,
  setUsername,
  setEmail,
  setPassword,
  setCPassword,
  handleSubmit,
  errors,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={style.page}>
      <div className={`${style.page_card} card shadow`}>
        <p className="fw-bold fs-4">Register</p>
        {errors ? <div className={style.error}>{errors}</div> : " "}
        <form className={style.page_form} onSubmit={handleSubmit}>
          <div className={style.input_error}>
            <label className="ps-2">Username</label>
            <br />
            <input
              name="userName"
              placeholder="Username"
              type="text"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={style.input_error}>
            <label className="ps-2">Email</label>
            <br />
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.input_error}>
            <label className="ps-2">Password</label>
            <br />
            <div className={`d-flex align-items-center ${style.show_input}`}>
              <input
                name="password"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Show
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
          </div>

          <div className={style.input_error}>
            <label className="ps-2">Confirm Password</label>
            <br />
            <div className={`d-flex align-items-center ${style.show_input}`}>
              <input
                name="cPassword"
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <Show
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
            </div>
          </div> 
            <button type="submit" className={style.submit_btn}>
              Submit
            </button> 
        </form>
        <div className="d-flex align-items-center gap-2 mt-4">
          <p className="mb-0 account">Already have an account?</p>
          <Link to="/" className={`text-decoration-none ${style.btn_color}`}>
            Login
          </Link>
        </div>
        <div className="d-flex gap-4 align-items-center justify-content-center my-3">
          <hr className={style.hr} />
          <p className="mb-0 text-secondary fs-small">OR</p>
          <hr className={style.hr} />
        </div>
        <div className="d-flex justify-content-center gap-3">
          <GoogleAuth />
          <FacebookAuth />
        </div>
      </div>
    </div>
  );
};

export default ResigterUI;
