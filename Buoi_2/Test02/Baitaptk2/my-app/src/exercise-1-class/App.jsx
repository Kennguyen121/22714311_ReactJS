import React, {Component} from "react";
import Contact from "./Contact.jsx";

class App extends Component {
    render() {
        const chidi = {
            firstName: "Chidi",
            lastName: "Anagonye",
            phone: "123-456-7890",
            address: "123 Main St"
        };

        return (
            <div>
                <h1>Contact List</h1>
                <Contact contact={chidi} />
            </div>
        );
    }
}

export default App;