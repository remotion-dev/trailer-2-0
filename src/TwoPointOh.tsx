import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';

const Title = styled.div`
	font-size: 600px;
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
	margin-top: 0;
`;

const Subtitle = styled.div`
	font-size: 100px;
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
	margin-top: 0;
`;

export const TwoPointOh: React.FC = () => {
	const {fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const scale = spring({
		frame,
		fps,
		config: {damping: 200, mass: 0.7},
	});
	const opacity = interpolate(frame, [50, 60], [0, 1]);
	const textOpacity = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	return (
		<div
			style={{
				backgroundColor: 'white',
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				lineHeight: 1,
			}}
		>
			<div
				style={{
					opacity: textOpacity,
				}}
			>
				<Title style={{transform: `scale(${scale})`}}>2.0</Title>
				<Subtitle style={{opacity}}>with audio support</Subtitle>
			</div>
		</div>
	);
};
