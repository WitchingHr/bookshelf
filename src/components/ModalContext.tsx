import { createContext, useContext, useState } from "react";

import { type BookProps } from "./Book";

const ModalContext = createContext<BookProps | null>(null);

export const useModal = () => useContext(ModalContext);

interface Props {
  children: React.ReactNode
}

const ModalProvider: React.FC<Props> = ({ children }) => {
	const [modalData, setModalData] = useState<BookProps | null>(null);

	return (
		<ModalContext.Provider value={{ modalData, setModalData }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
