import styled from 'styled-components';

export const StyledAuthorList = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	list-style: none;
	margin-bottom: ${(p) => p.theme.space[2]};
	padding-bottom: ${(p) => p.theme.space[1]};
	padding-left: ${(p) => p.theme.space[2]};
	border-bottom: 1px solid;
	border-bottom-color: ${(p) => p.theme.colors.secondary};
`;
