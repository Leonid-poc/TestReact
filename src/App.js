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
			price: "infinity"
		},
		{
			id: 0,
			firstName: "Alina",
			lastName: "Vildanova",
			age: 18,
			bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus.",
			price: "infinity"
		}
	]
	constructor(props) {
		super(props);
		this.state = {
			users: this.users
		}
		this.addingUser = this.addingUser.bind(this);
	}

	addingUser(user) {
		user.id = this.users.length;
		console.log(user);
		this.users.push(user);
		this.setState({users: this.users});
	}

	render() {
		return (
			<div>
                <Header text="List of Users" />
				<main>
					<Users users={this.state.users} key={9999} />
				</main>
				<aside>
					<AddUser add={this.addingUser} key={9998} />
				</aside>
			</div>
		)
	}
}

export default App;