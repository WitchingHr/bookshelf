import { useState, type Dispatch, type SetStateAction } from "react";

// bookshelf component
const Bookshelf = () => {
  // collection state
  const [collection, setCollection] = useState<string[]>([]);

	return (
		<div>
			<div className="border m-2">
        {/* pass down collection state to shelf for rendering */}
				<Shelf collection={collection} />
			</div>
      {/* pass down collection state to form for adding books */}
			<Form collection={collection} setCollection={setCollection}  />
		</div>
	);
};

// interface Book {
//   name: string;
// }

interface FormProps {
  collection: string[];
  setCollection: Dispatch<SetStateAction<string[]>>;
}

// form for adding books to the shelf
const Form: React.FC<FormProps> = ({collection, setCollection}) => {
	// state for input value
	const [name, setName] = useState<string>("");

	// update input value
	function handleInputChange(event: any) {
		setName(event.target.value);
	}

	// save input value as name
	function handleSumbit(event: any) {
		event?.preventDefault();
    setCollection([...collection, name]);
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
				{name && <button type="submit">Add</button>}
			</form>
		</div>
	);
};

interface ShelfProps {
  collection: string[];
}

// shelf
const Shelf: React.FC<ShelfProps> = ({collection}) => {
	return (
		<div className="flex border m-2 h-24">
			{collection.map((book: string, id: number) => (
				<div className="border bg-red-600" key={id}>{book}</div>
			))}
		</div>
	);
};

export default Bookshelf;
