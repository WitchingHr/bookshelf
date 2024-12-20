import Book from "./Book";
import { type BookProps } from "./Book";
import { useCollection } from "./CollectionContext";

// render shelf with books
const Shelf: React.FC = () => {
	const {collection} = useCollection();
	return (
		<>
      {/* render each book in collection */}
			{collection.map((book: BookProps, id: number) => (
				<Book name={book.name} author={book.author} key={id} />
			))}
		</>
	);
};

export default Shelf;
