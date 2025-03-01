import React, { useState } from "react";
import ContactList from "./ContactList.jsx";
import { INITIAL_CONTACTS } from "./data.js";

const App = () => {
  const [contacts, setContacts] = useState(INITIAL_CONTACTS);

  return (
    <div>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
