import React, { useState, useEffect, useMemo } from "react";
import AddUser from "./AddUser";
import { AiFillCloseCircle, AiFillEdit } from "react-icons/ai";

const User = (props) => {
    const [edit, setEdit] = useState(false);
    const userinfo = props.user
    useEffect(() => {
        setEdit(false);
    });

    return (
        <div className="userInfo" key={userinfo.id}>
            <AiFillCloseCircle className="EventBut"onClick={() => {props.onDelete(userinfo.id) }}/>
            <AiFillEdit className="EventBut" onClick={() => setEdit(!edit)}/>
            <h3>{userinfo.lastName} {userinfo.firstName}</h3>
            <p>{(userinfo.bio && userinfo.bio.length > 100) ? userinfo.bio.substring(0, 100) + '...' : userinfo.bio}</p>
            <hr></hr>
            <div className="userPrice">Price: {userinfo.price ? "Infinity" : "0$"}</div>
            {edit && <AddUser editing={true} edit={props.onEdit} user_info={userinfo}/>}
        </div>
    )
}

export default User;