import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";

const users = [
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
	},
	{
		id: 2,
		firstName: "Olga",
		lastName: "Georg",
		age: 43,
		bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, ducimus.",
		price: true,
	}
];

const App = (props) => {
	const [humans, setHumans] = useState(users);
	// setState(prev => {return [...prev, users]});
	let ids = users.length;

	const addingUser = (user) => {
		user.id = ids;
		setHumans([...humans, user]);
		ids++;
	}

	const editUser = (user) => {
		// users = users.filter(el => el.id !== user.id);
		// users.push(user);
		setHumans([...humans.filter(el => el.id !== user.id), user])
	}

	const deleteUser = (user_id) => {
		setHumans(() => [...humans.filter(el => el.id !== user_id)]);
	}

	return (
		<div>
			<Header text="List of Users" />
			<main>
				<Users users={humans} onEdit={editUser} onDelete={deleteUser}/>
			</main>
			<aside>
				<AddUser add={addingUser}/>
			</aside>
		</div>
	)
}

export default App;