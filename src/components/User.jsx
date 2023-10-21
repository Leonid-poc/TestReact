import React from "react";
import AddUser from "./AddUser";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.userinfo = props.user;
        this.state = {
            editing: false,
        }
    }

    render() {
        return (
            <div className="userInfo" key={this.userinfo.id}>
                <AiFillCloseCircle className="EventBut"onClick={() => {this.props.onDelete(this.userinfo.id) }}/>
                <AiFillEdit className="EventBut" onClick={() => {this.setState({editing: !this.state.editing})}}/>
                <h3>{this.userinfo.lastName} {this.userinfo.firstName}</h3>
                <p>{this.userinfo.bio.length > 100 ? this.userinfo.bio.substring(0, 100) + '...' : this.userinfo.bio}</p>
                <hr></hr>
                <div className="userPrice">Price: {this.userinfo.price ? "Infinity" : "0$"}</div>
                {this.state.editing && <AddUser editing={true} edit={this.props.onEdit} user_info={this.userinfo}/>}
            </div>
        )
    }
}

export default User;