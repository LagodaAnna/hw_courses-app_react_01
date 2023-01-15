import styled from 'styled-components';
import { Button } from 'common';

export const Form = styled.form`
	display: grid;
	grid-template-columns: 400px 1fr;
	grid-template-rows: 1fr;
	align-items: end;
`;

export const StyledButton = styled(Button)`
	margin-left: 70px;
`;
