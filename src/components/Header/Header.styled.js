import styled from 'styled-components';

import { Logo } from './components';
import { Button } from 'common';

export const StyledHeader = styled.header`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	align-items: center;

	padding-left: ${(p) => p.theme.space[6]};
	padding-right: ${(p) => p.theme.space[6]};
	padding-top: ${(p) => p.theme.space[5]};
	padding-bottom: ${(p) => p.theme.space[5]};
	background-color: ${(p) => p.theme.colors.header};
	border-bottom: 2px solid;
	border-color: ${(p) => p.theme.colors.secondary_dark};
`;

export const StyledLogo = styled(Logo)`
	grid-row: 1;
	grid-column: 1;
`;

export const StyledName = styled.span`
	grid-row: 1;
	grid-column: 7;
	color: ${(p) => p.theme.colors.secondary};
	font-weight: 500;
	font-size: 28px;
`;

export const StyledButton = styled(Button)`
	grid-row: 1;
	grid-column: 8;
	margin-left: auto;
`;
