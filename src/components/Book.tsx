import classNames from "classnames";
import { useState } from "react";

export interface BookProps {
	name: string;
	author: string;
	// cover: string;
	id?: number;
}

// renders books on shelf
const Book: React.FC<BookProps> = ({ name, author, id }) => {
	// state for hover
	const [isHovered, setIsHovered] = useState<boolean>(false);

	// conditional class dependent on hover state
	const bookClass = classNames({
		'border transition duration-200': true,
		"[writing-mode:vertical-lr] truncate bg-red-500 py-2 px-1 rounded": !isHovered,
		"bg-blue-500": isHovered,
	});

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={bookClass}
			key={id}
		>
			<p>{name}</p>
			{/* hide author by default */}
			{isHovered && <p>{author}</p>}
		</div>
	);
};

export default Book;
