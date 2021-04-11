import React from 'react';
import {random, useVideoConfig} from 'remotion';
import styled from 'styled-components';

export const AUDIO_GRADIENT =
	'linear-gradient(rgb(16 171 58), rgb(43 165 63) 60%)';

const Tag = styled.div`
	background: ${AUDIO_GRADIENT};
	height: 110px;
	width: 800px;
	border: 1px solid rgba(0, 0, 0, 0.05);
	border-radius: 8px;
	display: flex;
`;

export const AudioTag: React.FC<{
	seed: number;
	trimLeft: number;
	trimRight: number;
	offset: number;
}> = ({seed, trimLeft, trimRight, offset}) => {
	const randomBars = new Array(60)
		.fill(true)
		.map((b, i) => random(`${i}-${seed}`));
	const {width} = useVideoConfig();
	const barWidth = 800 - trimLeft - trimRight;
	return (
		<Tag
			style={{
				width: barWidth,
				marginLeft: (width - 800) / 2 + trimLeft + offset,
			}}
		>
			<div
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					flex: 1,
				}}
			>
				{randomBars.map((b) => {
					return (
						<div
							style={{
								width: 8,
								borderRadius: 4,
								height: b * 80,
								backgroundColor: 'rgba(255, 255, 255, 0.2)',
								display: 'inline-block',
								marginLeft: 2,
								marginRight: 2,
							}}
						/>
					);
				})}
			</div>
		</Tag>
	);
};
