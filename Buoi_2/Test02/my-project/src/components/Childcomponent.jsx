import React from "react";

class Childcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueInput: ''
        }
    }
    handleInput = (event) => {
        console.log(event.target.value);
        this.setState({
            valueInput: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.valueInput} 
                onChange={(event) => {this.handleInput(event)}}
                type="text" />
            </div>
        );
    }
}
export default Childcomponent;