import React, { Component } from "react";

class Contact extends Component {
  render() {
    const { contact, onDelete } = this.props;
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "10px",
          borderRadius: "5px",
          width: "250px",
        }}
      >
        <h2>{contact.firstName}</h2>
        <h4>{contact.lastName}</h4>
        <hr />
        <p>
          <strong>Phone:</strong> {contact.phone}
        </p>
        <hr />
        <p>
          <strong>Address:</strong> {contact.address}
        </p>
        <hr />
        <li className="list-group-item text-end">
          <button
            className="btn btn-danger"
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      </div>
    );
  }
}

export default Contact;
