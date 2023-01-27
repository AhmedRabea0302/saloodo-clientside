import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="section">
      <h1 className="section-title">Login</h1>
      <div>
        <form method="POST" onSubmit={handleSubmit} className="create-form">
          <div className="form-control">
            <label htmlFor="email">emaill</label>
            <input
              type="text"
              id="email"
              className="create-form"
              name="email"
              value={formFields.email}
              onChange={handleChange}
            />
            <small>{formErrors.email}</small>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              className="create-form"
              name="password"
              value={formFields.password}
              onChange={handleChange}
            />
            <small>{formErrors.password}</small>
          </div>

          <div className="form-control text-center">
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
          <p className="register-label">
            Don't Have Account,
            <Link to="/register">
              <label>Register Here</label>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
