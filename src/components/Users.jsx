import React from "react";
import User from "./User";

const Users = (props) => {
    return (
        <div className="users">
            {props.users.map((user) => (<User user={user} onEdit={props.onEdit} onDelete={props.onDelete} key={user.id}/>))}
        </div>
    )
}

export default Users;