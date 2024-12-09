import { useState } from "react";

// form for adding books to the shelf
const MyForm = () => {
	// state for input value
	const [name, setName] = useState("");
	// state for saving name
	const [savedName, setSavedName] = useState("");

	// update input value
	function handleInputChange(event: any) {
		setName(event.target.value);
	}

	// save input value as name
	function handleSumbit(event: any) {
		event?.preventDefault();
		setSavedName(name);
		setName("");
	}

	return (
		<div className="">
			<form onSubmit={handleSumbit}>
				<label>
					Name:
					<input
						value={name}
						onChange={handleInputChange}
						type="text"
						placeholder="Enter name"
						className="border"
					/>
				</label>
				<button type="submit">Add</button>
			</form>

			{/* show name */}
			{savedName && <p>{savedName}</p>}
		</div>
	);
};

// bookshelf component
const Bookshelf = () => {
	return (
		<div>
			<div className="flex border m-2">Books go here</div>
			<MyForm />
		</div>
	);
};

export default Bookshelf;
