import {
	createContext,
	useContext,
	useState,
	type Dispatch,
	type SetStateAction,
} from "react";
import { type BookProps } from "./Book";

interface CollectionContextProps {
	collection: BookProps[];
	setCollection: Dispatch<SetStateAction<BookProps[]>>;
}

const CollectionContext = createContext<CollectionContextProps | null>(null);

export const useCollection = () => {
	const context = useContext(CollectionContext);
	// handle null
	if (!context) {
		throw new Error("must be used in context provider");
	}
	return context;
};

interface CollectionProviderProps {
	children: React.ReactNode;
}

export const CollectionProvider: React.FC<CollectionProviderProps> = ({
	children,
}) => {
	const [collection, setCollection] = useState<BookProps[]>([]);
	return (
		<CollectionContext.Provider value={{ collection, setCollection }}>
			{children}
		</CollectionContext.Provider>
	);
};
