import React from "react";

const Contact = ({ contact }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        width: "250px",
      }}
    >
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>
        <strong>Phone:</strong> {contact.phone}
      </p>
      <p>
        <strong>Address:</strong> {contact.address}
      </p>
    </div>
  );
};

export default Contact;
