import { StyledInput, StyledLabel } from './Input.styled';

const Input = ({
	name,
	labelText,
	placeholderText,
	inputValue,
	onInputChange,
}) => (
	<StyledLabel htmlFor='input'>
		{labelText}
		<StyledInput
			type='text'
			placeholder={placeholderText}
			onChange={onInputChange}
			value={inputValue}
			name={name}
			id='input'
		/>
	</StyledLabel>
);

export default Input;
