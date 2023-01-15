import { Input } from 'common';
import { Form, StyledButton } from './SearchBar.styled';

const SearchBar = ({ inputValue, onInputChange }) => {
	return (
		<Form
			onSubmit={(event) => {
				event.preventDefault();
				console.log('Submit');
			}}
		>
			<Input inputValue={inputValue} onInputChange={onInputChange} />
			<StyledButton
				buttonText='Search'
				type='submit'
				onButtonClick={() => {
					console.log('Search');
				}}
			/>
		</Form>
	);
};

export default SearchBar;
