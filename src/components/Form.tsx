import { type Dispatch, type SetStateAction, useRef, useState } from "react";
import { type BookProps } from "./Book";

interface FormProps {
	collection: BookProps[];
	setCollection: Dispatch<SetStateAction<BookProps[]>>;
}

type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

// form for adding books to the shelf
const Form: React.FC<FormProps> = ({ collection, setCollection }) => {
	// state for input values
	const [name, setName] = useState<string>("");
	const [author, setAuthor] = useState<string>("");

	// update name input value
	const handleNameInputChange: InputChangeHandler = (event) => {
		setName(event.target.value);
	};

	// update author input value
	const handleAuthorInputChange: InputChangeHandler = (event) => {
		setAuthor(event.target.value);
	};

	// save input values as new book added to collection
	function handleSumbit(event: React.FormEvent<HTMLFormElement>): void {
		event?.preventDefault();
		// add new book to collection
		setCollection([...collection, { name, author }]);
		// clear inputs
		setName("");
		setAuthor("");
		// focus name input
		inputRef.current?.focus();
	}

	// ref for focusing input on submit
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<form onSubmit={handleSumbit}>
			{/* name input */}
			<Input
				label={"Name"}
				value={name}
				onChange={handleNameInputChange}
				ref={inputRef}
			/>
			{/* author input */}
			<Input
				label={"Author"}
				value={author}
				onChange={handleAuthorInputChange}
			/>
			{/* render button if inputs have value */}
			{name && author && <button type="submit" className="rounded bg-slate-200 px-2">Add Book</button>}
		</form>
	);
};

interface InputProps {
	label: string;
	value: string;
	onChange: InputChangeHandler;
	ref?: React.Ref<HTMLInputElement>;
}

// text input
const Input: React.FC<InputProps> = ({ label, value, onChange, ref }) => {
	const attributes = {
		value,
		onChange,
		type: "text",
		placeholder: "Enter " + label.toLowerCase(),
		className: "border px-1 ml-2 text-black rounded",
		// if ref, pass ref attribute
		...(ref ? { ref: ref } : {}),
	};

	return (
		<label className="mx-2 text-white">
			{label}
			<input {...attributes} />
		</label>
	);
};

export default Form;
