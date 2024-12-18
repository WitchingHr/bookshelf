import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";

import { type BookProps } from "./Book";

interface ModalContextProps {
	modalData: BookProps | null;
	setModalData: Dispatch<SetStateAction<BookProps | null>>;
}

// create context for modal
const ModalContext = createContext<ModalContextProps | null>(null);

export const useModal = () => {
	const context = useContext(ModalContext);
	// handle null
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

interface ModalProviderProps {
	children: React.ReactNode;
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	//  state for passing data from books to modal
	const [modalData, setModalData] = useState<BookProps | null>(null);

	return (
		<ModalContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
