import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="../../../public/logo.png" alt="" />
          <span>RealEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contnet</a>
        <a href="/">Agnets</a>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/login">Sign in </a>
            <a href="/register" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon">
          <img
            src="../../../public/menu.png"
            alt=""
            onClick={() => setOpen(!open)}
          />
        </div>
        {/* don't understand this expression*/}
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contnet</a>
          <a href="/">Agnets</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
