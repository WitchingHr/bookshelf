import Book from "./Book";
import { type BookProps } from "./Book";

interface ShelfProps {
	collection: BookProps[];
}

// render shelf with books
const Shelf: React.FC<ShelfProps> = ({ collection }) => {
	return (
		<div className="flex border m-2 h-24">
      {/* render each book in collection */}
			{collection.map((book: BookProps, id: number) => (
				<>
          <Book name={book.name} author={book.author} id={id} />
				</>
			))}
		</div>
	);
};

export default Shelf;
