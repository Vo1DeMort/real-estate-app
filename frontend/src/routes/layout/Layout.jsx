import Navbar from "../../components/navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import "./layout.scss";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {/* what is this outlet */}
        <Outlet />
      </div>
    </div>
  );
}

export function RequireAuth() {
  const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!currentUser) {
  //     <Navigate to="/login" />;
  //   }
  // }, [currentUser]);

  // if(!currentUser) return <Navigate to="/login" /></Navigate>

  return !currentUser ? (
    <Navigate to="/login" />
  ) : (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {/* what is this outlet */}
        <Outlet />
      </div>
    </div>
  );
}
