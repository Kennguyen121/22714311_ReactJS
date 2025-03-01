import React, { Component } from "react";
import Contact from "./Contact";

class ContactList extends Component {
  render() {
    const { contacts, onDelete, onDeleteAll } = this.props;

    return (
      <>
        <div className="px-5">
          <div className="row row-cols-1 row-cols-md-3 g-4 gap-3">
            {this.props.contacts.map((contact) => (
              <Contact key={contact.id} contact={contact} onDelete={onDelete} />
            ))}
          </div>
          <div className="row mt-3">
            <div className="col text-end">
              <button className="btn btn-danger" onClick={onDeleteAll}>
                Delete All
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactList;
