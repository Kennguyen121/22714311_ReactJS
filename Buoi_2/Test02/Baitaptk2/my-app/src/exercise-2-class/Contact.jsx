import React, {Component} from "react";

class Contact extends Component {
    render() {
        const {contact} = this.props;
        return (
            <div style={{border: "1px solid black", padding: "10px",
            borderRadius: "5px", width: "300px"}}>
                <h2>{contact.firstName} {contact.lastName}</h2>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Address:</strong> {contact.address}</p>
            </div>
        )
    }
}

export default Contact;