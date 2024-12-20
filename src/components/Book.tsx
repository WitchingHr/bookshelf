import classNames from "classnames";
import { useState } from "react";
import { useModal } from "./ModalContext";

export interface BookProps {
	name: string;
	author: string;
	cover?: string;
}

// renders books on shelf
const Book: React.FC<BookProps> = ({ name, author }) => {
	// state for hover
	const [isHovered, setIsHovered] = useState<boolean>(false);

	// conditional class dependent on hover state
	const bookClass = classNames({
		"border py-2 px-2 rounded transition duration-200 [writing-mode:vertical-lr] truncate":
			true,
		"bg-red-500": !isHovered,
		"bg-blue-500": isHovered,
	});

	// for sending book info to modal
	const { setModalData } = useModal();

	return (
		<button
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			// open modal on click send info to modal
			onClick={() => setModalData({ name, author })}
			className={bookClass}
		>
			{name}
		</button>
	);
};

export default Book;
