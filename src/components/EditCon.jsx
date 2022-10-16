import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditCon = () => {
  // const params = useParams();

  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    contactNum: "",
  });

  const { id } = useParams();

  const onChangeHandler = (event) => {
    setEnteredInp({ ...enteredInp, [event.target.name]: event.target.value });
  };

  const addStdHandler = (event) => {
    event.preventDefault();
    console.log(enteredInp);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-5">EDIT STUDENT {id}</h1>
          <div className="col-md-6 shadow mx-auto p-5">
            <form onSubmit={addStdHandler}>
              <div className="mb-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Name"
                  onChange={onChangeHandler}
                  value={enteredInp.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={onChangeHandler}
                  value={enteredInp.email}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contactNum">Contact Number </label>
                <input
                  type="number"
                  className="form-control"
                  id="contactNum"
                  name="contactNum"
                  aria-describedby="emailHelp"
                  placeholder="Contact Number"
                  onChange={onChangeHandler}
                  value={enteredInp.contactNum}
                />
              </div>

              <div>
                <Link to="/" className="btn btn-info btn-small">
                  Update
                </Link>
                <Link to="/" className="btn btn-danger btn-small mx-2">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCon;
