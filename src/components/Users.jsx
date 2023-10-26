import React, {useState, useEffect} from "react";
import User from "./User";

const Users = (props) => {
    const [allUsers, setAllUsers] = useState(props.users);
    useEffect(() => {
        setAllUsers(props.users);
    });
    return (
        <div className="users">
            {
                allUsers.map((user) => (<User user={user} onEdit={props.onEdit} onDelete={props.onDelete} key={user.id}/>))
            }
        </div>
    )
}

export default Users;