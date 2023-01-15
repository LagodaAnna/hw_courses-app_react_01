import StyledButton from './Button.styled';

const Button = ({ className, onButtonClick, buttonText, type }) => (
	<StyledButton
		className={className}
		onClick={onButtonClick}
		type={type ? type : 'button'}
	>
		{buttonText}
	</StyledButton>
);

export default Button;
