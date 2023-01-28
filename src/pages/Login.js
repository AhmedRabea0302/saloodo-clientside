import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { validateFormFields } from "../Validations/loginValidator";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitt, setIsSubmitt] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };
  useEffect(() => {
    if (Object.keys(formErrors).length !== 0) {
      setIsSubmitt(false);
    }
  }, [formErrors]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validateFormFields(formFields));
    setIsSubmitt(true);
    if (isSubmitt) {
      console.log("Validated");
    }
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
