import React from "react";
import User from "./User";

class Users extends React.Component {
    render() {
        return (
            <div className="users">
                {this.props.users.map(user => (<User user={user} onDelete={this.props.onDelete} key={user.id}/>))}
            </div>
        )
    }
}

export default Users;