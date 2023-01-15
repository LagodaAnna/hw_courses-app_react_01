import styled from 'styled-components';

export const StyledInput = styled.input`
	display: block;
	padding: ${(p) => p.theme.space[2]};
	margin-top: ${(p) => p.theme.space[3]};
	border-radius: 6px;
	border-width: 1px;
	border-color: ${(p) => p.theme.colors.secondary_dark};
	background-color: ${(p) => p.theme.colors.secondary};
	width: 100%;
	outline: none;
`;

export const StyledLabel = styled.label``;
