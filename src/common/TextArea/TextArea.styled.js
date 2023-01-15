import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
	display: block;
	margin-top: ${(p) => p.theme.space[4]};
	padding: ${(p) => p.theme.space[3]};
	width: 98%;
	max-width: 98%;
	min-height: 150px;
	resize: none;
	border-radius: 6px;
	border: none;
	background-color: ${(p) => p.theme.colors.secondary};
	outline: none;
`;

export const StyledLabel = styled.label``;
