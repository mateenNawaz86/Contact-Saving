import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { actionCreators } from "./state/index";

const AddContact = () => {
  const [enteredInp, setEnteredInp] = useState({
    name: "",
    email: "",
    contactNum: "",
  });

  const contacts = useSelector((state) => state.contact);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const onChangeHandler = (event) => {
    setEnteredInp({ ...enteredInp, [event.target.name]: event.target.value });
  };

  const addStdHandler = (event) => {
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
      id: contacts[contacts.length - 1].id + 1,
      name: enteredInp.name,
      email: enteredInp.email,
      contactNum: enteredInp.contactNum,
    };

    dispatch(actionCreators.addStd(data));
    toast.success("Student added successfully");
    navigate("/");

    setEnteredInp({
      name: "",
      email: "",
      contactNum: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center my-5">ADD STUDENT</h1>
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
                  autoComplete="off"
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
                  placeholder="03127654532  "
                  onChange={onChangeHandler}
                  value={enteredInp.contactNum}
                />
              </div>

              <div>
                <input
                  type="submit"
                  value="Add Student"
                  className="btn btn-info btn-block"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddContact;
