import { useState } from "react";
import { type BookProps } from "./Book";
import Form from "./Form";
import Shelf from "./Shelf";
import Modal from "./Modal";
import ModalProvider from "./ModalContext";

// bookshelf component
const Bookshelf = () => {
	// collection state
	const [collection, setCollection] = useState<BookProps[]>([]);

	return (
		<>
			<div className="border flex m-2 h-1/3 p-2">
				{/* pass down collection state to shelf for rendering */}
				<ModalProvider>
					<Shelf collection={collection} />
					<Modal />
				</ModalProvider>
			</div>
			{/* pass down collection state to form for adding books */}
			<Form collection={collection} setCollection={setCollection} />
		</>
	);
};

export default Bookshelf;
