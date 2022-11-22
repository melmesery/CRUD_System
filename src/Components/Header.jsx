import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header mb-5 text-center">

      <div className="link mx-auto mt-5">
        <NavLink className="nav-link" to="/">
          HOME
        </NavLink>
      </div>
      <div className="link mx-auto">
        <NavLink className="nav-link" to="/post/add">
          POST
        </NavLink>
      </div>
      <div className="link mx-auto mb-5">
        <div className="login">LOGIN</div>
      </div>

      <h1 className="text-white title my-5">
        C R U D <br /> APP<sub>lication</sub>
      </h1>
    </div>
  );
};

export default Header;
