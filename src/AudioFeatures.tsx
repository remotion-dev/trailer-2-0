import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
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
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.04);
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

export const AudioFeatures: React.FC = () => {
	const {width, height} = useVideoConfig();

	return (
		<Outer>
			<Container
				style={{
					backgroundColor: 'white',
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
							}}
						>
							<AudioVisualization />
						</Card>
						<Card>
							<AudioFormats />
						</Card>
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card>
							<RemoteAudio />
						</Card>
						<Card>
							<AudioTagTimeline />
						</Card>
						<Card style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
							<Muted />
						</Card>
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card style={{overflow: 'hidden'}}>
							<AudioFromVideo />
						</Card>
						<Card>
							<CutAndTrim />
						</Card>
						<Card>
							<MediaUtils />
						</Card>
					</div>
				</div>
			</Container>
		</Outer>
	);
};
