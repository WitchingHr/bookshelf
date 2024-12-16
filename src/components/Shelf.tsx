import Book from "./Book";
import { type BookProps } from "./Book";

interface ShelfProps {
	collection: BookProps[];
}

// render shelf with books
const Shelf: React.FC<ShelfProps> = ({ collection }) => {
	return (
		<>
      {/* render each book in collection */}
			{collection.map((book: BookProps, id: number) => (
				<Book name={book.name} author={book.author} id={id} />
			))}
		</>
	);
};

export default Shelf;
