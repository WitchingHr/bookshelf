export interface BookProps {
	name: string;
	author: string;
	// cover: string;
	// id: number;
}

// renders books on shelf
const Book: React.FC<BookProps> = ({ name, author }) => {
	return (
		<>
			<p>{name}</p>
			<p>{author}</p>
		</>
	);
};

export default Book;
