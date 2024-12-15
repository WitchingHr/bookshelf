import { type Dispatch, type SetStateAction, useRef, useState } from "react";
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
		inputRef.current?.focus();
	}
	
	const inputRef = useRef(null);

	return (
		<div>
			<form onSubmit={handleSumbit}>
        {/* name input */}
				<label className="mx-2 text-white">
					Name:
					<input
						ref={inputRef}
						value={name}
						onChange={handleNameInputChange}
						type="text"
						placeholder="Enter name"
						className="border px-1 ml-2 text-black rounded"
					/>
				</label>
        {/* author input */}
				<label className="mx-2 text-white">
					Author:
					<input
						value={author}
						onChange={handleAuthorInputChange}
						type="text"
						placeholder="Enter author"
						className="border px-1 ml-2 text-black rounded"
					/>
				</label>
				{/* render button if inputs have value */}
				{name && author && <button type="submit">Add</button>}
			</form>
		</div>
	);
};

export default Form;
