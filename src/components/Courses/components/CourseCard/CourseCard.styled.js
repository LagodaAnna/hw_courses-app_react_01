import styled from 'styled-components';

export const List = styled.li`
	display: grid;
	grid-template-columns: 70% 30%;
	grid-template-rows: 1fr;
	align-items: center;
	padding: ${(p) => p.theme.space[5]};
	margin-bottom: ${(p) => p.theme.space[3]};
	border-radius: 6px;
	border: solid 1px;
	border-color: ${(p) => p.theme.colors.secondary_dark};
	background-color: ${(p) => p.theme.colors.secondary};
`;

export const Authors = styled.p`
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;

export const LeftPartOfCard = styled.div`
	margin-right: ${(p) => p.theme.space[6]};
`;
