import styled from 'styled-components';
import {Card} from './Card';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 60px;
	color: white;
background: linear-gradient(to right, #e01d67, #79367a);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.3;
`;

export const Interpolate: React.FC = () => {
	return (
		<Card>
			<Title>
				interpolate()
				<div style={{fontSize: 35}}>for n>2 points</div>
			</Title>
		</Card>
	);
};
