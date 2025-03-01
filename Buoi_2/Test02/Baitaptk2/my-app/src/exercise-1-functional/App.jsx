import React, {use, useEffect, useState} from "react";
import Contact from "./Contact";

const App = () => {
    const [chidi, setChidi] = useState({
        firstName: "Chidi",
        lastName: "Anagonye",
        phone: "555-366-8987",
        address: "St. John's University, Sydney, Australia"
    });

    useEffect(() => {
        console.log("Contact info updated", chidi);
    }, [chidi]);

    return (
        <div>
            <h1>Contact List</h1>
            <Contact contact={chidi} />
        </div>
    );
};

export default App;