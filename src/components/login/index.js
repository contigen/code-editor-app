import React from "react";
import "./index.css";
const Login = () => {
  const [isLogin, setIsLogin] = React.useState(false);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // pass the form element, referenced as evt.target
    const formData = new FormData(evt.target);
    const URL = ``;
    let responseData = await fetch(URL, {
      method: `POST`,
      body: formData,
    });
    let resultData = await responseData.json();
  };
  const Login = () => setIsLogin(!isLogin);
  return (
    <section className="login">
      <div className="login__container">
        <h1>{isLogin ? `Login` : `Sign Up`}</h1>
        <div className="login__form">
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="pass">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                name="pass"
                id="pass"
                required
              />
            </div>
            <button type="handleSubmit">code!</button>
          </form>
        </div>
        <small>
          {!isLogin ? `Already have an account` : `Don't have an account`}
          {"? "}&nbsp;
          <a href="#" onClick={Login}>
            {!isLogin ? `Login` : `Sign Up`}
          </a>
        </small>
      </div>
    </section>
  );
};

export default Login;
