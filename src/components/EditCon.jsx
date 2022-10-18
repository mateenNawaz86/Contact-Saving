import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index";

import { toast } from "react-toastify";

const EditCon = () => {
  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    contactNum: "",
  });

  const contacts = useSelector((state) => state.contact);
  const { id } = useParams();

  const onChangeHandler = (event) => {
    setEnteredInp({ ...enteredInp, [event.target.name]: event.target.value });
  };

  const currentStd = contacts.find(
    (currentStd) => currentStd.id === parseInt(id)
  );

  useEffect(() => {
    if (currentStd) {
      setEnteredInp({
        name: currentStd.name,
        email: currentStd.email,
        contactNum: currentStd.contactNum,
      });
    }
  }, [currentStd]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateStdHandler = (event) => {
    event.preventDefault();

    if (!enteredInp.name || !enteredInp.email || !enteredInp.contactNum) {
      return toast.warning("Please fillup the all field!");
    }

    // check entered email is there already exist or NOT
    const checkEmail = contacts.find(
      (contactItem) =>
        contactItem.id !== parseInt(id) &&
        contactItem.email === enteredInp.email &&
        enteredInp.email
    );

    if (checkEmail) {
      return toast.error("This email already exist");
    }

    // check entered number is there already exist or NOT
    const checkNum = contacts.find(
      (item) =>
        item.id !== parseInt(id) && item.contactNum === enteredInp.contactNum
    );

    if (checkNum) {
      return toast.error("This number already exist");
    }

    // getting data
    const data = {
      id: parseInt(id),
      name: enteredInp.name,
      email: enteredInp.email,
      contactNum: enteredInp.contactNum,
    };

    dispatch(actionCreators.updateStd(data));
    toast.success("Student added successfully");
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {currentStd ? (
            <>
              <h1 className="text-center my-5">EDIT STUDENT {id}</h1>
              <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={updateStdHandler}>
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
                    <input
                      type="submit"
                      value="Update"
                      className="btn btn-small btn-info"
                    />
                    <Link to="/" className="btn btn-danger btn-small mx-2">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </>
          ) : (
            <h2 className="dispaly-3 my-5 text-center">
              NO STUDENT EXIST WITH THIS {id}
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default EditCon;
