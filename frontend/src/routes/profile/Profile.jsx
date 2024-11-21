import Chat from "../../components/chat/Chat";
import List from "../../components/list/List";
import "./profile.scss";
import apiReq from "../../lib/apiReq";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { currentUser, updateCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await apiReq.post("/auth/logout");
      updateCurrentUser(null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User info</h1>
            <Link to="/profile/update">
              <button>Update profile</button>
            </Link>
          </div>
          <div className="info">
            <span>
              Avatar :{" "}
              <img src={currentUser.avatar || "/noavatar.jpg"} alt="" />
            </span>
            <span>
              Usernanme : <b>{currentUser.username}</b>
            </span>
            <span>
              Email : <b>{currentUser.email}</b>
            </span>
            <button onClick={handleLogout}>logout</button>
          </div>
          <div className="title">
            <h1>My list</h1>
            <Link to="/add">
              <button>Create new Post</button>
            </Link>
          </div>

          <List />
          <div className="title">
            <h1>Save list</h1>
          </div>
          <List />
        </div>
      </div>

      <div className="chatContainer">
        <div className="wrapper">
          <Chat />
        </div>
      </div>
    </div>
  );
}
