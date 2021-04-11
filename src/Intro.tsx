import React from 'react';
import {AbsoluteFill, Img, interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {Hype} from './Hype';
import tweet from './tweet.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: white;
`;

const Tweet = styled(Img)`
	box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
`;

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
	const scale = interpolate(frame, [0, 190], [0.9, 1.3], {
		extrapolateRight: 'clamp',
	});
	return (
		<Container>
			<div style={{display: 'flex', flexDirection: 'column'}}>
				<div style={{display: 'flex', flexDirection: 'row'}}>
					<Hype />
					<Hype />
					<Hype />
					<Hype />
					<Hype />
				</div>
				<div style={{display: 'flex', flexDirection: 'row'}}>
					<Hype />
					<Hype />
					<Hype />
					<Hype />
					<Hype />
				</div>
				<div style={{display: 'flex', flexDirection: 'row'}}>
					<Hype />
					<Hype />
					<Hype />
					<Hype />
					<Hype />
				</div>
			</div>
			<AbsoluteFill
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Tweet
					src={tweet}
					style={{
						borderRadius: 15,
						transform: `scale(${scale})`,
					}}
				/>
			</AbsoluteFill>
		</Container>
	);
};
