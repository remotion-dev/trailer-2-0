import React from 'react';
import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 60px;
	color: white;
	background: linear-gradient(to right, #000, #555);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.3;
`;

export const CutAndTrim: React.FC = () => {
	const frame = useCurrentFrame();
	const offset = (Math.sin(frame / 10) + 1) / 2;
	return (
		<div>
			<Title>Cut and trim</Title>
			<div
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.6)',
					width: 80,
					height: 80,
					position: 'absolute',
					marginTop: -90,
					marginLeft: -13,
					transform: `rotate(30deg) translateX(${-offset * 70}px)`,
				}}
			/>
			<div
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.6)',
					width: 80,
					height: 80,
					position: 'absolute',
					marginTop: -60,
					marginLeft: 295,
					transform: `rotate(20deg) translateX(${offset * 70}px)`,
				}}
			/>
		</div>
	);
};
