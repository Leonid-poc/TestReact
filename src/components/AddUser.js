import React from "react";

class AddUser extends React.Component {
    render() {
        return (
            <form>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <input type="text" placeholder="О Себе"/>
                <input type="text" placeholder="Возраст"/>
                <label htmlFor="Happy">Бесценный?</label>
                <input type="checkbox" id="Happy"/>
                <button type="button">Добавить</button>
            </form>
        );
    }
}

export default AddUser;