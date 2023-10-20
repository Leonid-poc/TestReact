import React from "react";
import User from "./User";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="users">
                {this.props.users.map(user => (<User user={user} />))}
            </div>
        )
    }
}

export default Users;