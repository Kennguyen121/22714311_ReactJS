import React, {Component} from "react";
import Contact from "./Contact";

class ContactList extends Component {
    render() {
        return (
            <div style={{display: "flex", gap: "10px",
            overflowX: "auto"}}>
                {this.props.contacts.map((contact) => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        )
    }
}

export default ContactList;