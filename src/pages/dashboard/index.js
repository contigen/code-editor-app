import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = React.useState("user");
  return (
    <section className="dashboard">
      <div className="dashboard__navbar">
        <p>Dashboard</p>
        <p>Create New</p>
      </div>
      <div>
        <h2>Welcome back, {username}</h2>
        <div className="dashboard__user">
          <h4>{new Date().toDateString()}</h4>
        </div>
        <section className="dashboard__file">
          <h3>My Files</h3>
          <input type="text" placeholder="Search files" />
          <big>You have no files yet</big>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
