// App.jsx
import React, { Component } from "react";
import ContactList from "./ContactList.jsx";
import { INITIAL_CONTACTS } from "./data.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: INITIAL_CONTACTS,
    };
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
