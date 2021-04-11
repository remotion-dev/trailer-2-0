import React from 'react';
import {
	AbsoluteFill,
	random,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {VolumeCurve} from './VolumeCurve';

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
	scale: number;
	volume: (i: number) => number;
}> = ({seed, volume, trimLeft, scale: scale, trimRight, offset}) => {
	const frame = useCurrentFrame();
	const randomBars = new Array(90)
		.fill(true)
		.map((b, i) => random(`${i}-${seed}`));
	const {width, fps} = useVideoConfig();
	const barWidth = 800 - trimLeft - trimRight;
	const height = (i: number) =>
		spring({
			fps,
			frame: frame - i - fps - 10,
			config: {
				damping: 200,
			},
		});

	return (
		<Tag
			style={{
				width: barWidth,
				marginLeft: (width - 800) / 2 + trimLeft + offset,
				transform: `scale(${scale})`,
			}}
		>
			<div
				style={{
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					flex: 1,
					marginLeft: -trimLeft,
				}}
			>
				{randomBars.map((b, i) => {
					return (
						<div
							style={{
								width: 8,
								borderRadius: 4,
								height: b * height(i / 4) * 80,
								backgroundColor: 'rgba(255, 255, 255, 0.2)',
								display: 'inline-block',
								marginLeft: 2,
								marginRight: 2,
							}}
						/>
					);
				})}
			</div>
			<AbsoluteFill>
				<VolumeCurve volume={volume} visualizationWidth={barWidth} />
			</AbsoluteFill>
		</Tag>
	);
};
