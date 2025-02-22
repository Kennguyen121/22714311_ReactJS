import React, { useState } from 'react';

const AddUserInfor = ({ handleAddnewUser }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleAddnewUser({
            id: Math.floor((Math.random() * 100) + 1) + "user",
            Name: name,
            Age: age
        });
        setName('');
        setAge('');
    };

    return (
        <form onSubmit={handleOnSubmit}>
            <label>Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Age:</label>
            <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default AddUserInfor;