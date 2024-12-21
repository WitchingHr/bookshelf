import { useState } from "react";
import { useModal } from "./ModalContext";
import type { InputChangeHandler } from "./Form";
import { useCollection } from "./CollectionContext";

const Modal: React.FC = () => {
	const [editModeOn, setEditModeOn] = useState<boolean>(false);
	const { modalData, setModalData } = useModal();
	const [name, setName] = useState<string | undefined>("");
	const [author, setAuthor] = useState<string | undefined>("");
	const { collection, setCollection } = useCollection();

	// hide modal by default
	if (!modalData) return null;

	// prevent modal close on modal click
	const stopPropagation = (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
	};

	// close modal
	function handleCloseModal() {
		if (editModeOn) {
			setEditModeOn(false);
		}
		setModalData(null);
	}

	// opens edit mode
	function handleEdit() {
		// set input values from modalData
		setName(modalData?.name);
		setAuthor(modalData?.author);
		// set edit mode true
		setEditModeOn(true);
	}

	// update name input value
	const handleNameInputChange: InputChangeHandler = (event) => {
		setName(event.target.value);
	};

	// update author input value
	const handleAuthorInputChange: InputChangeHandler = (event) => {
		setAuthor(event.target.value);
	};

	// find existing book in collection and update it
	function handleSave() {
		// handle null
		if (!name || !author) return;
		// map over collection and update book
		const updatedCollection = collection.map((book) => {
			if (book.name === modalData?.name && book.author === modalData.author) {
				return { name, author };
			}
			return book;
		});
		setCollection(updatedCollection);
		setEditModeOn(false);
		// update modalData with new values
		setModalData({ ...modalData, name, author });
	}

	return (
		<div
			// clicking outside of modal closes it
			onClick={handleCloseModal}
			className="flex justify-center items-center absolute top-0 left-0 z-20 h-full w-full bg-black/50"
		>
			<div
				//  prevent modal close on modal click
				onClick={stopPropagation}
				className="h-2/3 w-[400px] p-6 bg-white rounded-md"
			>
				{!editModeOn ? (
					// show name and author by default
					<>
						<p className="text-xl">{modalData.name}</p>
						<p>{modalData.author}</p>
						<button onClick={handleEdit}>Edit</button>
					</>
				) : (
					// if edit mode on, render form to edit book info
					<form onSubmit={handleSave}>
						<input
							onChange={handleNameInputChange}
							className="text-xl"
							type="text"
							value={name}
						/>
						<input
							onChange={handleAuthorInputChange}
							type="text"
							value={author}
						/>
						<button type="submit">Save</button>
					</form>
				)}
				{modalData.cover && <p>{modalData.cover}</p>}
			</div>
		</div>
	);
};

export default Modal;
