import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {Card} from './Card';
import {Hexagon} from './Hexagon';
import {LightningBolt} from './LightningBolt';

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 70px;
	color: white;
	background: linear-gradient(to right, #4290f5, #42e9f5);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	line-height: 1.12;
`;

export const WebpackCaching: React.FC = () => {
	const frame = useCurrentFrame();
	const sin = (i: number) =>
		interpolate(Math.sin((frame - i) / 15), [-1, 1], [0.8, 1]);
	return (
		<Card
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flex: 1,
				flexDirection: 'row',
			}}
		>
			<div style={{marginLeft: 30, marginRight: 20}}>
				<div
					style={{
						height: 100,
						width: 100,
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
					}}
				>
					<Hexagon
						style={{
							height: 100,
							color: '#4290f5',
							position: 'absolute',
							transform: `scale(${sin(0)})`,
						}}
					/>
					<Hexagon
						style={{
							height: 60,
							color: 'rgba(255, 255, 255, 0.25)',
							position: 'absolute',
							top: 20,
							transform: `scale(${sin(15)})`,
						}}
					/>
					<LightningBolt
						style={{
							height: 30,
							width: 30,
							color: 'white',
							position: 'absolute',
						}}
					/>
				</div>
			</div>
			<Title>Webpack Caching</Title>
		</Card>
	);
};
