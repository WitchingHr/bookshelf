import { useState } from "react";
import { type BookProps } from "./Book";
import Form from "./Form";
import Shelf from "./Shelf";

// bookshelf component
const Bookshelf = () => {
	// collection state
	const [collection, setCollection] = useState<BookProps[]>([]);

	return (
		<div>
			<div className="border m-2">
				{/* pass down collection state to shelf for rendering */}
				<Shelf collection={collection} />
			</div>
			{/* pass down collection state to form for adding books */}
			<Form collection={collection} setCollection={setCollection} />
		</div>
	);
};

export default Bookshelf;
