import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoutes from "./Components/PrivateRoutes.jsx";
import Add from "./Pages/Add/Add.jsx";
import Blog from "./Pages/Blog/Blog.jsx";
import CheckEmail from "./Pages/CheckEmail.jsx";
import EmailConfirmation from "./Pages/EmailConfirmation.jsx";
import Error from "./Pages/Error.jsx";
import ForgetPassword from "./Pages/ForgetPassword.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import ResetPassword from "./Pages/ResetPassword.jsx";
import Update from "./Pages/Update/Update.jsx";
import UpdatePassword from "./Pages/UpdatePassword.jsx";
import View from "./Pages/View/View.jsx";

const App = () => { 
  return ( 
        <BrowserRouter>
          <ToastContainer position="top-center" autoClose={1500} />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route exact path="/" element={<Blog />} />
              <Route path="/blog/add" element={<Add />} />
              <Route path="/blog/update/:id" element={<Update />} />
              <Route path="/blog/view/:id" element={<View />} />
              <Route path="/update-password" element={<UpdatePassword />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/confirmation" element={<EmailConfirmation />} />
            <Route path="/checkEmail" element={<CheckEmail />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
  );
};

export default App;
