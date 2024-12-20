import Form from "./Form";
import Shelf from "./Shelf";
import Modal from "./Modal";
import ModalProvider from "./ModalContext";
import { CollectionProvider } from "./CollectionContext";

// bookshelf component
const Bookshelf = () => {
	return (
		<>
			<CollectionProvider>
				<div className="border flex m-2 h-1/3 p-2">
					{/* pass down collection state to shelf for rendering */}
					<ModalProvider>
						<Shelf />
						<Modal />
					</ModalProvider>
				</div>
				{/* pass down collection state to form for adding books */}
				<Form />
			</CollectionProvider>
		</>
	);
};

export default Bookshelf;
