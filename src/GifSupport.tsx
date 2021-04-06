import {Gif} from '@remotion/gif';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';
import {Card} from './Card';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 110px;
	color: white;
	line-height: 0.8;
	text-shadow: 0 0 50px black;
`;

export const GifSupport: React.FC = () => {
	return (
		<Card
			style={{
				overflow: 'hidden',
				position: 'relative',
			}}
		>
			<Gif
				style={{flex: 1, height: '100%', width: '100%', position: 'absolute'}}
				fit="cover"
				src="https://media.giphy.com/media/3o72F7YT6s0EMFI0Za/giphy.gif"
			/>
			<AbsoluteFill
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					display: 'flex',
					textAlign: 'center',
				}}
			>
				<Title>
					<span style={{fontSize: 200}}>GIF</span> Component
				</Title>
			</AbsoluteFill>
		</Card>
	);
};
