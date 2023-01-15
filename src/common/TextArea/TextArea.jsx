import { StyledTextArea, StyledLabel } from './TextArea.styled';

const TextArea = ({ value, onChange, name, className, label, placeholder }) => (
	<StyledLabel>
		{label}
		<StyledTextArea
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name={name}
			className={className}
		/>
	</StyledLabel>
);

export default TextArea;
