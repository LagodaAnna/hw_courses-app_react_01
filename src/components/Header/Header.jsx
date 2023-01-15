import {
	StyledHeader,
	StyledName,
	StyledLogo,
	StyledButton,
} from './Header.styled';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo />
			<StyledName>Anna</StyledName>
			<StyledButton
				buttonText='Logout'
				onButtonClick={() => {
					console.log('Logout click');
				}}
			/>
		</StyledHeader>
	);
};

export default Header;
