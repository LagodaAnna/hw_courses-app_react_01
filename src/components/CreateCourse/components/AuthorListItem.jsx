import { Button } from 'common';
import { StyledAuthorList } from './AuthorListItem.styled';

export const AuthorsListItem = ({ name, id, buttonText, onButtonClick }) => {
	return (
		<StyledAuthorList id={id}>
			{name}
			<Button buttonText={buttonText} onButtonClick={onButtonClick} />
		</StyledAuthorList>
	);
};
