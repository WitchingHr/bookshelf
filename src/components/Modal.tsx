import type { BookProps } from "./Book";
import { useModal } from "./ModalContext";

const Modal: React.FC<BookProps> = ({ name, author, cover }) => {
	const { modalData, setModalData } = useModal();

	if (!modalData) return null;

	return (
		<div onClick={() => setModalData(null)} className="flex justify-center items-center absolute z-20 h-full w-full bg-black/50">
			<div className="h-2/3 w-1/3 bg-white rounded-md">
				<p>{modalData.name}</p>
				<p>{modalData.author}</p>
				{modalData.img && <p>{modalData.img}</p>}
			</div>
		</div>
	);
};

export default Modal;
