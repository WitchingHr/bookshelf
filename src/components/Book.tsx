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
		"border py-2 px-2 rounded transition duration-200 [writing-mode:vertical-lr] truncate":
			true,
		"bg-red-500": !isHovered,
		"bg-blue-500": isHovered,
	});

	return (
		<button
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={bookClass}
			key={id}
		>
			{name}
		</button>
	);
};

export default Book;
