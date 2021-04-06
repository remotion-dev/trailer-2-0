import styled from 'styled-components';
import {Card} from './Card';
import {TimelineSliderHandle} from './TimelineSliderHandle';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 60px;
	color: white;
	background: linear-gradient(to right, #c0392b, #e74c3c);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: left;
`;

export const FramePerfect: React.FC = () => {
	return (
		<Card style={{position: 'relative', overflow: 'hidden'}}>
			<TimelineSliderHandle />
			<div
				style={{
					backgroundColor: 'white',
					boxShadow: '0 0 40px white',
					position: 'absolute',
					zIndex: 3,
				}}
			>
				<Title>
					<div style={{fontSize: 30}}>Fixed:</div>
					Frame-perfect seeking
				</Title>
			</div>
		</Card>
	);
};
