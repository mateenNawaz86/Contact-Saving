import React from "react";
import { Link } from "react-router-dom";
import ContactsList from "./ContactsList";

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

          <div>
            <ContactsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
