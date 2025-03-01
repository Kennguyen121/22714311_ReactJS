import React, {Component} from "react";

class Contact extends Component {
    render() {
        const {firstName, lastName, phone, address} = this.props.contact;

        return (
            <div style={{border: "1px solid black", padding: "10px", 
            borderRadius: "5px", width: "360px"}}>
                <h2>{firstName}</h2>
                <h3>{lastName}</h3>
                <p><strong>Phone:</strong> {phone}</p>
                <p><strong>Address:</strong> {address}</p>
            </div>
        )
    };
}

export default Contact;