import React from "react";

const Contact = ({ contact, deleteContact }) => {
  return (
    <div className="col">
      <div className="card h-100 w-150 shadow-sm d-flex flex-column">
        <img src="/vite.svg" alt="" />
        <div className="card-header bg-white">
          <h5 className="card-title">{contact.firstName}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{contact.lastName}</h6>
        </div>
        <div className="card-body flex-grow-1">
          <p className="card-text">Phone: {contact.phone}</p>
          <hr />
          <p className="card-text">Address: {contact.address}</p>
        </div>
        <div className="card-footer text-end bg-white">
          <button
            className="btn btn-danger"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
