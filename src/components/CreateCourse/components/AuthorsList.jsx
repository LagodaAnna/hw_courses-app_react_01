import { AuthorsListItem } from './AuthorListItem';

export const AuthorsList = ({ authors, onButtonClick, buttonText }) => {
	return (
		<ul>
			{authors.map((author) => (
				<AuthorsListItem
					key={author.id}
					id={author.id}
					name={author.name}
					buttonText={buttonText}
					onButtonClick={onButtonClick}
				/>
			))}
		</ul>
	);
};
