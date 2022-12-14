import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "./state/index";
import { toast } from "react-toastify";

const ContactsList = () => {
  const contacts = useSelector((state) => state.contact);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(actionCreators.deleteStd(id));
    toast.success("Student deleted successfully");
  };

  return (
    <>
      <div className="col-lg-10 mx-auto mt-4">
        <h2 className="text-center mb-4">ALL OF STUDENTS</h2>

        <table className="table table-hover">
          <thead className="text-white bg-dark text-center">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((item, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.contactNum}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link
                      to={`/edit/${item.id}`}
                      className="btn btn-small btn-info "
                    >
                      Edit
                    </Link>

                    <button
                      type="button"
                      className="btn btn-small btn-danger mx-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-title="Tooltip on bottom"
                      onClick={() => deleteHandler(item.id)}
                    >
                      Dalete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactsList;
