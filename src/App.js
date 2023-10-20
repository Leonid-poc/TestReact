import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [
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
		}
	}

	addUser(user) {

	}

	render() {
		return (
			<div>
                <Header text="List of Users" />
				<Users users={this.state.users} />
			</div>
		)
	}
}

export default App;