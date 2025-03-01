import React, { useState } from 'react';

const AddUserInfor = (props) => {
const { handleAddnewUser } = props;

    const [Name, setName] = useState('');
    const [Age, setAge] = useState('');
    const [Address, setAddress] = useState('IUH');

    const handleOnchangeInput = (e) => {
        setName(e.target.value);
    }

    const handleOnchangeInputAge = (e) => {
        setAge(e.target.value);
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: Name,
            Age: Age
        });
        setName('');
        setAge('');
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label htmlFor=''>Name:</label>
            <input
                type="text"
                value={Name}
                onChange={(e) => handleOnchangeInput(e)}
            />
            <br />
            <label>Age:</label>
            <input
                type="text"
                value={Age}
                onChange={(e) => handleOnchangeInputAge(e)}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddUserInfor;