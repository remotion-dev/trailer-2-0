import React from 'react';
import {
	Easing,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {Card} from './Card';

const Column = styled.div`
	width: 450px;
`;

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 50px;
	color: black;
	line-height: 1.3;
	border-bottom: 1px solid black;
	margin-right: 16px;
	margin-left: 16px;
`;

const Feature = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 24px;
	color: black;
	line-height: 1.3;
`;

const CardContent = styled.div`
	flex: 1;
	height: 200px;
	padding: 25px;
`;

export const PreviousRelease: React.FC = () => {
	const frame = useCurrentFrame();
	const {width, height, fps} = useVideoConfig();
	const scale = (i: number) =>
		spring({
			fps,
			frame: frame - i * 8,
			config: {
				damping: 200,
			},
		});

	const slide = interpolate(frame, [50, 80], [0, -400], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
		easing: Easing.out(Easing.ease),
	});
	return (
		<div style={{width, height, backgroundColor: 'white'}}>
			<div
				style={{
					width: width + 400,
					height,
					backgroundColor: 'rgba(0, 0, 0, 0.04)',
					flexDirection: 'row',
					display: 'flex',
					padding: 100,
					transform: `translateX(${slide}px)`,
				}}
			>
				<Column>
					<Title>1.1</Title>
					<Card
						style={{
							transform: `scale(${scale(0)})`,
						}}
					>
						<CardContent>
							<Feature>Webpack customization</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(1)})`,
						}}
					>
						<CardContent>
							<Feature>`Img` and `IFrame` components</Feature>
						</CardContent>
					</Card>
				</Column>
				<Column>
					<Title>1.2</Title>
					<Card
						style={{
							transform: `scale(${scale(1)})`,
						}}
					>
						<CardContent>
							<Feature>100% faster rendering</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(2)})`,
						}}
					>
						<CardContent>
							<Feature>Windows support</Feature>
						</CardContent>
					</Card>
				</Column>
				<Column>
					<Title>1.3</Title>
					<Card
						style={{
							transform: `scale(${scale(2)})`,
						}}
					>
						<CardContent>
							<Feature>Plain JS support</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(3)})`,
						}}
					>
						<CardContent>
							<Feature>Typesafe config file</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(4)})`,
						}}
					>
						<CardContent>
							<Feature>Easing API</Feature>
						</CardContent>
					</Card>
				</Column>
				<Column>
					<Title>1.4</Title>
					<Card
						style={{
							transform: `scale(${scale(3)})`,
						}}
					>
						<CardContent>
							<Feature>HEVC and WebM codecs</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(4)})`,
						}}
					>
						<CardContent>
							<Feature>Transparent videos</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(5)})`,
						}}
					>
						<CardContent>
							<Feature>Asynchronous composition metadata</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(6)})`,
						}}
					>
						<CardContent>
							<Feature>Fine-grained codec and quality configuration</Feature>
						</CardContent>
					</Card>
				</Column>
				<Column>
					<Title>1.5</Title>
					<Card
						style={{
							transform: `scale(${scale(4)})`,
						}}
					>
						<CardContent>
							<Feature>Use local Chrome browser</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(5)})`,
						}}
					>
						<CardContent>
							<Feature>Improved M1 + WSL support</Feature>
						</CardContent>
					</Card>
					<Card
						style={{
							transform: `scale(${scale(6)})`,
						}}
					>
						<CardContent>
							<Feature>Smoother timeline</Feature>
						</CardContent>
					</Card>
				</Column>
			</div>
		</div>
	);
};
