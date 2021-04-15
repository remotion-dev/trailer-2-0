import {useAudioData, visualizeAudio} from '@remotion/media-utils';
import React from 'react';
import {AbsoluteFill, useCurrentFrame, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import voiceover from './res/voiceover.wav';

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 60px;
	color: white;
	background: linear-gradient(to right, #fff, #eee);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.1;
`;

export const AUDIO_FEATURES_START = 933;

export const AudioVisualization: React.FC = () => {
	const {fps} = useVideoConfig();
	const frame = useCurrentFrame();
	const audio = useAudioData(voiceover);

	if (!audio) {
		return null;
	}
	const visualized = visualizeAudio({
		audioData: audio,
		fps,
		frame: frame + AUDIO_FEATURES_START,
		numberOfSamples: 8,
	});
	return (
		<div
			style={{
				flex: 1,
				background: 'linear-gradient(to right, #7cc9f8, #75b3f9)',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'relative',
			}}
		>
			<AbsoluteFill>
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						flexDirection: 'row',
					}}
				>
					{new Array(5).fill(1).map((_, i) => {
						return (
							<div
								style={{
									flex: 1,
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'flex-end',
									justifyContent: 'flex-end',
									marginLeft: 3,
									marginRight: 3,
								}}
							>
								{new Array(20).fill(1).map((_, j) => {
									const volume = visualized[i];
									const visible = (20 - j) / 50 - 0.05 < volume;
									return (
										<div
											style={{
												height: 15,
												width: '100%',
												backgroundColor: 'rgba(255, 255, 255, 0.1)',
												opacity: Number(visible),
												marginTop: 4,
												marginBottom: 4,
												borderRadius: 8,
											}}
										/>
									);
								})}
							</div>
						);
					})}
				</div>
			</AbsoluteFill>
			<Title>
				Audio visualization <br /> <span style={{fontSize: 120}}>API</span>
			</Title>
		</div>
	);
};
