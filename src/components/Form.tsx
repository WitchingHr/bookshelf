import { type Dispatch, type SetStateAction, useState } from "react";
import { type BookProps } from "./Book";

interface FormProps {
	collection: BookProps[];
	setCollection: Dispatch<SetStateAction<BookProps[]>>;
}

// form for adding books to the shelf
const Form: React.FC<FormProps> = ({ collection, setCollection }) => {
	// state for input values
	const [name, setName] = useState<string>("");
	const [author, setAuthor] = useState<string>("");

	// update name input value
	function handleNameInputChange(event: any) {
		setName(event.target.value);
	}

	// update author input value
	function handleAuthorInputChange(event: any) {
		setAuthor(event.target.value);
	}

	// save input values as new book added to collection
	function handleSumbit(event: any) {
		event?.preventDefault();
		// add to collection
		setCollection([...collection, { name: name, author: author }]);
		// clear inputs
		setName("");
		setAuthor("");
	}

	return (
		<div>
			<form onSubmit={handleSumbit}>
        {/* name input */}
				<label>
					Name:
					<input
						value={name}
						onChange={handleNameInputChange}
						type="text"
						placeholder="Enter name"
						className="border"
					/>
				</label>
        {/* author input */}
				<label>
					Author:
					<input
						value={author}
						onChange={handleAuthorInputChange}
						type="text"
						placeholder="Enter author"
						className="border"
					/>
				</label>
				{/* render button if inputs have value */}
				{name && author && <button type="submit">Add</button>}
			</form>
		</div>
	);
};

export default Form;
