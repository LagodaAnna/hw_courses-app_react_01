import styled from 'styled-components';

const StyledButton = styled.button`
	padding-top: ${(p) => p.theme.space[2]};
	padding-bottom: ${(p) => p.theme.space[2]};
	border-radius: 6px;
	border: solid 1px;
	border-color: ${(p) => p.theme.colors.accent_border};
	background-color: ${(p) => p.theme.colors.secondary_dark};
	color: #ffffff;
	font-weight: 500;
	box-shadow: 2px 2px 4px 0px rgba(72, 61, 139, 0.52);
	cursor: pointer;
	width: 130px;

	&:hover {
		box-shadow: inset 1px 1px 12px 0px rgba(72, 61, 139, 0.52);
	}
`;

export default StyledButton;
