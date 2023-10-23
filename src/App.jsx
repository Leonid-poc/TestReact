import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

let users = [
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

const App = (props) => {
	const [state, setState] = useState(users);
	// setState(prev => {return [...prev, users]});
	let ids = users.length;
	useEffect(() => {
		setState({users: users})
	});
	// console.log(state);
	// React.useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			const data = await axios.get;
	// 			setState(prev => [...prev, ...data.data])
	// 		} catch (err) {
	// 			return console.log(err);
	// 		}
	// 	})()
	// })

	const addingUser = (user) => {
		user.id = ids;
		users.push(user);
		// useEffect(() => {
		// });
		setState({users: users});
		ids++;
	}

	const editUser = (user) => {
		users = users.filter(el => el.id !== user.id);
		users.push(user);
		// useEffect(() => {
		// });
		setState({users: []}, () => {
			setState({users: users});
		});
	}

	const deleteUser = (user_id) => {
		users = users.filter(el => el.id !== user_id);
		// useEffect(() => {
		// });
		setState({users: users});
	}

	return (
		<div>
			<Header text="List of Users" />
			<main>
				<Users users={state} onEdit={editUser} onDelete={deleteUser} key={9999} />
			</main>
			<aside>
				<AddUser add={addingUser} key={9998}/>
			</aside>
		</div>
	)
}

export default App;