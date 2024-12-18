import { useModal } from "./ModalContext";

const Modal: React.FC = () => {
	const { modalData, setModalData } = useModal();

	// hide modal by default
	if (!modalData) return null;

	return (
		// clicking outside of modal closes it
		<div
			onClick={() => setModalData(null)}
			className="flex justify-center items-center absolute z-20 h-full w-full bg-black/50"
		>
			<div className="h-2/3 w-1/3 bg-white rounded-md">
				<p>{modalData.name}</p>
				<p>{modalData.author}</p>
				{modalData.cover && <p>{modalData.cover}</p>}
			</div>
		</div>
	);
};

export default Modal;
