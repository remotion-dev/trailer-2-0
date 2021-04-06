import styled from 'styled-components';
const RADIUS = 30;

export const Card = styled.div`
	background-color: white;
	border-radius: ${RADIUS}px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.07);
	margin: 10px;
`;
