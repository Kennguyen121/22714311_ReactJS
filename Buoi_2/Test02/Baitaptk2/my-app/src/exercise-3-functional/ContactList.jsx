import React from "react";
import Contact from "./Contact.jsx";

const ContactList = ({ contacts, deleteContact, deleteAllContacts }) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </div>
      <div className="row mt-3">
        <div className="col text-end">
          <button
            className="btn btn-danger"
            onClick={deleteAllContacts}
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
