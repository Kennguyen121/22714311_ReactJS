import React, { useEffect, useState } from "react";
import Childcomponent from "./Childcomponent";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserInfor";

// class Mycomponent extends React.Component {
//     state = {
//         listUser: [
//             {id: 1, Name: 'Dung', Age: 49},
//             {id: 2, Name: 'Hoang', Age: 17},
//             {id: 3, Name: 'Chien', Age: 32}
//         ]
//     }
//     handleAddnewUser = (userObject) => {
//         this.setState({
//             listUser: [userObject, ...this.state.listUser]
//         });
//     }
//     handleDeleteUser = (userID) => {
//         let listUserClone = this.state.listUser;
//         listUserClone = listUserClone.filter((user) => user.id !== userID);
//         this.setState({
//             listUser: listUserClone
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <AddUserInfor handleAddnewUser={this.handleAddnewUser}>
//                 </AddUserInfor>
//                 <hr />
//                 <DisplayInfor 
//                 listUser={this.state.listUser}
//                 handleDeleteUser={this.handleDeleteUser}
//                 ></DisplayInfor>
//             </div>
//         );
//     }
// }

const Mycomponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            {id: 1, Name: 'Dung', Age: 49},
            {id: 2, Name: 'Hoang', Age: 17},
            {id: 3, Name: 'Chien', Age: 32}
        ]
    )
    const handleAddnewUser = (userObject) => {
        setListUser([userObject, ...listUser])
    }
    const handleDeleteUser = (userID) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter((user) => user.id !== userID);
        setListUser(listUserClone)
    }
    useEffect(() => {
        if (listUser.length === 0)
            alert("You deleted all users")
        console.log(">>> Call useeffect");
    }, []);

    return (
        <div>
            <AddUserInfor handleAddnewUser={handleAddnewUser}>
            </AddUserInfor>
            <hr />
            <DisplayInfor listUser={listUser} 
            handleDeleteUser={handleDeleteUser}></DisplayInfor>
        </div>
    );
};

export default Mycomponent;