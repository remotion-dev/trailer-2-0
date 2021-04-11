import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
import styled from 'styled-components';
import {AudioFormats} from './AudioFormats';
import {AudioTagTimeline} from './AudioTagTimeline';
import {Card} from './Card';
import {CutAndTrim} from './CutAndTrim';
import {Muted} from './Muted';

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
						<Card>Audio visualization APIs</Card>
						<Card>
							<AudioFormats />
						</Card>
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card>Remote audio</Card>
						<Card>
							<AudioTagTimeline />
						</Card>
						<Card style={{display: 'flex', flex: 1, overflow: 'hidden'}}>
							<Muted />
						</Card>
					</div>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
						<Card>Audio from `Video` tags</Card>
						<Card>
							<CutAndTrim />
						</Card>
						<Card>`media-utils` helper package</Card>
					</div>
				</div>
			</Container>
		</Outer>
	);
};
