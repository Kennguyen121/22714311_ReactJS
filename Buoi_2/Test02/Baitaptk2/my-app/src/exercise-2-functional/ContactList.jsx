import React from "react";
import Contact from "./Contact.jsx";

const ContactList = ({ contacts }) => {
  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
