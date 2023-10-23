import React, { useState } from "react";

const AddUser = (props) => {
    const [state, setState] = useState('');
    let myForm;
    if (props.editing) {
        setState({
            id: props.user_info.id,
            firstName: props.user_info.firstName,
            lastName: props.user_info.lastName,
            age: props.user_info.age,
            bio: props.user_info.bio,
            price: props.user_info.price,
        });
    }
    const shablon = {
        id: -1,
        firstName: '',
        lastName: '',
        age: '',
        bio: '',
        price: '0$'
    }
    

    const addUser = () => {
        props.add(state);
    }

    const editUser = () => {
        props.edit(state);
    }

    return (
        <form className="formAddUser" ref={(el) => myForm = el}>
            <input type="text" onChange={(e) => {setState({firstName: e.target.value})}} placeholder={props.editing ? props.user_info.firstName : "Имя"}/>
            <input type="text" onChange={(e) => {setState({lastName: e.target.value})}} placeholder={props.editing ? props.user_info.lastName : "Фамилия"}/>
            <textarea onChange={(e) => {setState({bio: e.target.value})}} placeholder={props.editing ? props.user_info.bio : "О Себе"}/>
            <input type="text" onChange={(e) => {setState({age: e.target.value})}} placeholder={props.editing ? props.user_info.age : "Возраст"}/>
            <label htmlFor="Price">
                Бесценный? <input type="checkbox" checked={(props.editing && props.user_info.price)} id="Price"onChange={(e) => {setState({price: e.target.checked})}}/>
            </label>
            <button type="button" onClick={() => {
                myForm.reset();
                setState({
                    firstName: state.firstName,
                    lastName: state.lastName,
                    price: state.price,
                    bio: state.bio,
                    age: state.age
                });
                props.editing ? editUser() : addUser();}}>{!props.editing ? "Добавить" : "Изменить"}
            </button>
        </form>
    );
}

export default AddUser;