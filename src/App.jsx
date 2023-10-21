import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

class App extends React.Component {
	users = [
		{
			id: 0,
			firstName: "Leonid",
			lastName: "Georg",
			age: 19,
			bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus.",
			price: true
		},
		{
			id: 1,
			firstName: "Alina",
			lastName: "Vildanova",
			age: 18,
			bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus.",
			price: true,
		}
	]
	constructor(props) {
		super(props);
		this.state = {
			users: this.users
		}
		this.addingUser = this.addingUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.editUser = this.editUser.bind(this);
		this.ids = this.users.length;
	}

	addingUser(user) {
		user.id = this.ids;
		this.users.push(user);
		this.setState({users: this.users});
		this.ids++;
	}

	editUser(user) {
		this.users = this.users.filter(el => el.id !== user.id);
		this.users.push(user);
		this.setState({users: []}, () => {
			this.setState({users: this.users});
		});
	}

	deleteUser(user_id) {
		this.users = this.users.filter(el => el.id !== user_id)
		this.setState({users: this.users})
	}

	render() {
		return (
			<div>
                <Header text="List of Users" />
				<main>
					<Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} key={9999} />
				</main>
				<aside>
					<AddUser add={this.addingUser} key={9998}/>
				</aside>
			</div>
		)
	}
}

export default App;