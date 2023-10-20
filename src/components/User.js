import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.userinfo = props.user;
    }

    render() {
        return (
            <div className="userInfo" key={this.userinfo.id}>
                <h3>{this.userinfo.lastName} {this.userinfo.firstName}</h3>
                <p>{this.userinfo.bio.length > 100 ? this.userinfo.bio.substring(0, 100) + '...' : this.userinfo.bio}</p>
                <hr></hr>
                <div className="userPrice">Price: {this.userinfo.price}</div>
            </div>
        )
    }
}

export default User;