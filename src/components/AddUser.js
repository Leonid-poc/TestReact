import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            bio: '',
            price: '',
        }
    }

    render() {
        return (
            <form>
                <input type="text" onChange={(e) => {this.setState({firstName: e.target.value})}} placeholder="Имя"/>
                <input type="text" onChange={(e) => {this.setState({lastName: e.target.value})}} placeholder="Фамилия"/>
                <input type="text" onChange={(e) => {this.setState({bio: e.target.value})}} placeholder="О Себе"/>
                <input type="text" onChange={(e) => {this.setState({age: e.target.value})}} placeholder="Возраст"/>
                <label htmlFor="Price">Бесценный?  <input type="checkbox" id="Price"onChange={(e) => {this.setState({price: e.target.checked ? "Infinity" : "0$"})}}/></label>
                <button type="button" onClick={() => {this.props.add({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    price: this.state.price,
                    bio: this.state.bio,
                    age: this.state.age
                })}}>Добавить</button>
            </form>
        );
    }
}

export default AddUser;