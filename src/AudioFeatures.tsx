import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {AudioFormats} from './AudioFormats';
import {AudioFromVideo} from './AudioFromVideo';
import {AudioTagTimeline} from './AudioTagTimeline';
import {AudioVisualization} from './AudioVisualization';
import {Card} from './Card';
import {CutAndTrim} from './CutAndTrim';
import {MediaUtils} from './MediaUtils';
import {Muted} from './Muted';
import {RemoteAudio} from './RemoteAudio';

const Outer = styled(AbsoluteFill)`
	background-color: white;
	top: 0;
`;

const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.04);
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

export const AudioFeatures: React.FC = () => {
	const {width, height, fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();

	const progress = (i: number): React.CSSProperties => {
		const p = spring({
			fps,
			frame: frame - i * 8 - 20,
			config: {
				damping: 100,
			},
		});
		const springOut = spring({
			fps,
			frame: frame - durationInFrames + 20 - i * 2,
			config: {
				damping: 100,
			},
		});
		return {
			transform: `translateX(${interpolate(
				p + springOut,
				[0, 1],
				[120, 0]
			)}px)`,
			opacity: p - interpolate(springOut, [0, 0.7], [0, 1]),
		};
	};

	return (
		<Outer>
			<Container
				style={{
					flex: 1,
					width,
					height,
				}}
			>
				<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card
							style={{
								overflow: 'hidden',
								...progress(0),
							}}
						>
							<AudioVisualization />
						</Card>
						<Card style={progress(1)}>
							<AudioFormats />
						</Card>
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card style={progress(1)}>
							<RemoteAudio />
						</Card>
						<Card style={progress(2)}>
							<AudioTagTimeline />
						</Card>
						<Card
							style={{
								display: 'flex',
								flex: 1,
								overflow: 'hidden',
								...progress(3),
							}}
						>
							<Muted />
						</Card>
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card style={{overflow: 'hidden', ...progress(3)}}>
							<AudioFromVideo />
						</Card>
						<Card style={progress(4)}>
							<CutAndTrim />
						</Card>
						<Card style={progress(5)}>
							<MediaUtils />
						</Card>
					</div>
				</div>
			</Container>
		</Outer>
	);
};
