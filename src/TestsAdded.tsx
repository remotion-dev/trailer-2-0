import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';
import {Card} from './Card';
import {CheckCheckerboard} from './CheckCheckerboard';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 120px;
	color: white;
	background: linear-gradient(to right, #fff, #eee);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1;
`;

export const TestsAdded: React.FC = () => {
	return (
		<Card
			style={{
				background: 'linear-gradient(to right,#1abc9c, #16a085)',
				position: 'relative',
			}}
		>
			<AbsoluteFill style={{overflow: 'hidden'}}>
				<CheckCheckerboard />
			</AbsoluteFill>
			<Title>
				<div style={{fontWeight: 800}}>170</div>
				<div style={{fontSize: 40}}>tests added</div>
			</Title>
		</Card>
	);
};
