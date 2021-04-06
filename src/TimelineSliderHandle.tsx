import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	width: 35px;
	height: 35px;
	position: absolute;
	top: 0;
	z-index: 1;
	left: 35px;
`;

export const TimelineSliderHandle: React.FC = () => {
	const frame = useCurrentFrame();
	const wave = Math.sin(frame / 30);
	const left = interpolate(wave, [-1, 1], [35, 100]);

	return (
		<Container style={{left}}>
			<svg width={35} viewBox="0 0 159 212" version="1.1">
				<path
					d="M17.0234375,1.07763419 L143.355469,1.07763419 C151.63974,1.07763419 158.355469,7.79336295 158.355469,16.0776342 L158.355469,69.390507 C158.355469,73.7938677 156.420655,77.9748242 153.064021,80.8248415 L89.3980057,134.881757 C83.7986799,139.635978 75.5802263,139.635978 69.9809005,134.881757 L6.66764807,81.1243622 C3.0872392,78.0843437 1.0234375,73.6246568 1.0234375,68.9277387 L1.0234375,17.0776342 C1.0234375,8.2410782 8.1868815,1.07763419 17.0234375,1.07763419 Z"
					fill="#f02c00"
				/>
			</svg>
			<div
				style={{
					width: 3,
					marginTop: -30,
					marginLeft: 16,
					backgroundColor: '#f02c00',
					height: 400,
					position: 'absolute',
				}}
			/>
		</Container>
	);
};
