import "./loginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import apiReq from "../../lib/apiReq";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

// local  storage vs cookies

function Login() {
  const [error, setError] = useState("");
  const [isloading, setIsloading] = useState(false);
  const { updateCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent refresh
    setIsloading(true);
    setError("");

    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await apiReq.post("/auth/login/", {
        username,
        password,
      });
      //localStorage.setItem("user", JSON.stringify(res.data));
      updateCurrentUser(res.data);

      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.msg);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            required
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input
            name="password"
            type="password"
            required
            placeholder="Password"
          />
          <button disabled={isloading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
