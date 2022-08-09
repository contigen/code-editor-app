import React from "react";
import "./index.css";
const Login = () => {
  const onSubmit = ({ ev }) => {
    ev.preventDefault();
  };
  return (
    <section className="login">
      <h1>Login</h1>
      <div className="login__form">
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="pass">Email Address</label>
            <input
              type="password"
              placeholder="Enter Password"
              name="pass"
              id="pass"
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <small>
        Already have an account? <a href="#">Login</a>
      </small>
    </section>
  );
};

export default Login;
