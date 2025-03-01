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

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleDeleteAll = () => {
    this.setState({
      contacts: [],
    });
  };

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <ContactList
          contacts={this.state.contacts}
          onDelete={this.handleDeleteContact}
          onDeleteAll={this.handleDeleteAll}
        />
      </div>
    );
  }
}

export default App;
