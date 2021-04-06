import {interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {Card} from './Card';
import {ResizeIcon} from './ResizeIcon';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 70px;
	color: white;
	background: linear-gradient(to right, #fff, #ccc);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.1;
`;

const Part = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Resizeable: React.FC = () => {
	const frame = useCurrentFrame();
	const wave = Math.sin(frame / 30);
	const flexing = interpolate(wave, [-1, 1], [0.3, 0.7]);
	const fontScale1 = interpolate(wave, [-1, 1], [0.8, 1.1]);
	const fontScale2 = interpolate(wave, [-1, 1], [1.1, 0.8]);
	return (
		<Card
			style={{
				flexDirection: 'column',
				position: 'relative',
				backgroundColor: '#222',
			}}
		>
			<Part style={{flex: flexing}}>
				<Title style={{transform: `scale(${fontScale1})`}}>Resizeable</Title>
			</Part>
			<ResizeIcon />
			<div
				style={{
					height: 4,
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					width: '100%',
					marginTop: -24,
				}}
			/>
			<Part style={{flex: 1 - flexing}}>
				<Title style={{transform: `scale(${fontScale2})`}}>editor panels</Title>
			</Part>
		</Card>
	);
};
