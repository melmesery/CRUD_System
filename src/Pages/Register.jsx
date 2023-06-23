import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import ResigterUI from "../UI/ResigterUI.jsx";

const Register = () => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName && !email && !password && !cPassword) {
      setErrors("please, enter your data");
    } else if (!userName) {
      setErrors("username is required");
    } else if (!email) {
      setErrors("email is required");
    } else if (!password) {
      setErrors("password is required");
    } else if (!cPassword) {
      setErrors("confirm your password");
    } else {
      fetch(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, email, password, cPassword }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message === "Done") {
            toast.success("Please, Check Your Mail");
            navigate("/login");
          } else {
            setErrors(data.message);
          }
        })
        .catch((error) => {
          setErrors(error.message);
        });
    }
  };
  return (
    <Fragment>
      <ResigterUI
        userName={userName}
        email={email}
        password={password}
        cPassword={cPassword}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        setCPassword={setCPassword}
        handleSubmit={handleSubmit}
        errors={errors}
      />
    </Fragment>
  );
};

export default Register;
