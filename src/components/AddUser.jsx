import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.editing) {
            this.state = {
                id: this.props.user_info.id,
                firstName: this.props.user_info.firstName,
                lastName: this.props.user_info.lastName,
                age: this.props.user_info.age,
                bio: this.props.user_info.bio,
                price: this.props.user_info.price,
            }
        }
        this.shablon = {
            id: -1,
            firstName: '',
            lastName: '',
            age: '',
            bio: '',
            price: '0$'
        }
        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
    }

    addUser() {
        this.props.add(this.state);
    }

    editUser() {
        this.props.edit(this.state);
    }

    render() {
        return (
            <form className="formAddUser" ref={(el) => this.myForm = el}>
                <input type="text" onChange={(e) => {this.setState({firstName: e.target.value})}} placeholder={this.props.editing ? this.props.user_info.firstName : "Имя"}/>
                <input type="text" onChange={(e) => {this.setState({lastName: e.target.value})}} placeholder={this.props.editing ? this.props.user_info.lastName : "Фамилия"}/>
                <textarea onChange={(e) => {this.setState({bio: e.target.value})}} placeholder={this.props.editing ? this.props.user_info.bio : "О Себе"}/>
                <input type="text" onChange={(e) => {this.setState({age: e.target.value})}} placeholder={this.props.editing ? this.props.user_info.age : "Возраст"}/>
                <label htmlFor="Price">
                    Бесценный? <input type="checkbox" checked={(this.props.editing && this.props.user_info.price)} id="Price"onChange={(e) => {this.setState({price: e.target.checked})}}/>
                </label>
                <button type="button" onClick={() => {
                    this.myForm.reset();
                    this.setState({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        price: this.state.price,
                        bio: this.state.bio,
                        age: this.state.age
                    });
                    this.props.editing ? this.editUser() : this.addUser();}}>{!this.props.editing ? "Добавить" : "Изменить"}
                </button>
            </form>
        );
    }
}

export default AddUser;