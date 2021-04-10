import React from 'react';
import styled from 'styled-components';
import {AUDIO_GRADIENT} from './AudioTag';

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 28px;
	color: white;
	background: linear-gradient(to right, #fff, #eee);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.3;
`;

const audioStyle: React.CSSProperties = {
	background: AUDIO_GRADIENT,
	height: 80,
	width: 350,
	borderRadius: 6,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
};

export const AudioTagTimeline: React.FC = () => {
	return (
		<div
			style={{
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<div
				style={{
					...audioStyle,
					position: 'absolute',
					marginTop: -90,
					opacity: 0.8,
					transform: `scale(0.9)`,
				}}
			/>
			<div
				style={{
					...audioStyle,
					position: 'absolute',
					marginTop: 90,
					opacity: 0.8,
					transform: `scale(0.9)`,
				}}
			/>
			<div
				style={{
					...audioStyle,
					position: 'absolute',
					marginTop: -180,
					opacity: 0.8,
					transform: `scale(0.82)`,
				}}
			/>
			<div
				style={{
					...audioStyle,
					position: 'absolute',
					marginTop: 180,
					opacity: 0.8,
					transform: `scale(0.82)`,
				}}
			/>
			<div style={audioStyle}>
				<Title>Timeline visualization</Title>
			</div>
		</div>
	);
};
