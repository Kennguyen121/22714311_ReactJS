import React, { useState } from "react";
import ContactList from "./ContactList.jsx";
import { INITIAL_CONTACTS } from "./data.js";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const deleteAllContacts = () => {
    setContacts([]);
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center">Contact List</h2>
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        deleteAllContacts={deleteAllContacts}
      />
    </div>
  );
};

export default App;
