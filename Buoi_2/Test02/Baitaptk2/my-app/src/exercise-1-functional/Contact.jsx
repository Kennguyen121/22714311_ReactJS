import React, {useEffect, useState} from "react";

const Contact = ({contact}) => {

    const [contactInfo, setContactInfo] = useState(contact);

    useEffect(() => {
        setContactInfo(contact);
    }
    , [contact]);

    return (
        <div style={{border: "1px solid #ccc", padding: "10px",
            borderRadius: "5px", width: "300px"}}>
            <h2>{contact.firstName}</h2>
            <h3>{contact.lastName}</h3>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Address:</strong> {contact.address}</p>
        </div>
    );
};

export default Contact;