import React, { useState } from "react";
import AddUser from "./AddUser";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

const User = (props) => {
    const [state, setState] = useState(0);
    const userinfo = props.user;
    setState({
        editing: false,
    });

    return (
        <div className="userInfo" key={userinfo.id}>
            <AiFillCloseCircle className="EventBut"onClick={() => {props.onDelete(userinfo.id) }}/>
            <AiFillEdit className="EventBut" onClick={() => {setState({editing: !state.editing})}}/>
            <h3>{userinfo.lastName} {userinfo.firstName}</h3>
            <p>{userinfo.bio.length > 100 ? userinfo.bio.substring(0, 100) + '...' : userinfo.bio}</p>
            <hr></hr>
            <div className="userPrice">Price: {userinfo.price ? "Infinity" : "0$"}</div>
            {state.editing && <AddUser editing={true} edit={props.onEdit} user_info={userinfo}/>}
        </div>
    )
}

export default User;