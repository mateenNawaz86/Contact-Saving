import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5 text-right">
            <Link to="/addContact" className="btn btn-outline-primary d-inline">
              Add Contact
            </Link>
          </div>

          <div className="col-md-6 mx-auto">
            <h2>Contact List is here for you guys</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
