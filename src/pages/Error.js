import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section text-center">
      <h2 className="section-title">Opp's, Dead End </h2>
      <Link to="/" className="error-page">
        <button className="btn btn-primary">Back To Home</button>
      </Link>
    </section>
  );
};

export default Error;
