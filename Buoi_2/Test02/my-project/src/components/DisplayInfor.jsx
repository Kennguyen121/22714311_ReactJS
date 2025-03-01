import React, { useEffect, useState } from "react";
import logo from '../../public/vite.svg'
import './component.scss'

// class DisplayInfor extends React.Component {

//     // constructor(props) {
//     //     console.log(">>> call constructor: 1")
//     // }

//     // componentDidMount() {
//     //     console.log(">>> Call me component did mount")
//     //     setTimeout(() => {
//     //         document.title = "Hello Vite+React"
//     //     }, 3000)
//     // }

//     // componentDidUpdate(prevProps, prevState, snapshot) {
//     //     console.log(">>> Call me did Update", this.props, prevProps);
//     // }

//     render() {
//         console.log(">>> Call me render")

//         const { listUser } = this.props;
//         console.log(listUser);
        
//         return (
//             <div>
//                 <img src={logo} alt="" />
//                 {listUser.map((user) => {
//                     return (
//                         <div key={user.id} className={user.Age < 18 ? "red": "blue"}>
//                             <div>User name is: {user.Name}</div>
//                             <div>User age is: {user.Age}</div>
//                             <button onClick={() => {
//                                 this.props.handleDeleteUser(user.id)
//                             }}>Delete</button>
//                             <hr />
//                         </div>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { listUser } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            document.title = "Hello React hook";
        }, 3000);
        console.log(">>> Call useeffect");
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <button onClick={handleShowHideListUser}>Show/Hide List User</button>
            {isShowHideListUser && listUser.map((user) => {
                return (
                    <div key={user.id} className={user.Age < 18 ? "red": "blue"}>
                        <div>User name is: {user.Name}</div>
                        <div>User age is: {user.Age}</div>
                        <button onClick={() => {
                            props.handleDeleteUser(user.id)
                        }}>Delete</button>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayInfor;