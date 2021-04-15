import React from 'react';
import {interpolate, useCurrentFrame, useVideoConfig, Video} from 'remotion';
import styled from 'styled-components';
import data from './res/data.mp4';
import gatsby from './res/gatsby.mp4';
import talk from './res/talk.mp4';
import tiktok from './res/tik-tok.mp4';
import twitter from './res/twitter.mp4';

const BigTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 160px;
	text-align: left;
	line-height: 1;
	font-weight: bold;
`;

const SectionTitle = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 50px;
	font-weight: bold;
	margin-top: 50px;
`;

export const Showcase: React.FC = () => {
	const {width} = useVideoConfig();
	const {height} = useVideoConfig();
	const frame = useCurrentFrame();
	const translation = interpolate(frame, [0, 25, 250], [1500, 300, -3000]);
	return (
		<div
			style={{
				flex: 1,
				backgroundColor: 'white',
				fontFamily: '--apple-system',
				flexDirection: 'row',
				display: 'flex',
			}}
		>
			<div
				style={{flex: 1, display: 'flex', alignItems: 'center', marginLeft: 80}}
			>
				<BigTitle>Made in Remotion</BigTitle>
			</div>
			<div style={{flex: 1, transform: `translateY(${translation}px)`}}>
				<div>
					<SectionTitle>Preview cards</SectionTitle> <br />
					<Video muted style={{width: width / 3}} src={gatsby} />
				</div>
				<div>
					<SectionTitle>Conference talks</SectionTitle> <br />
					<Video muted style={{width: width / 3}} src={talk} />
				</div>
				<div>
					<SectionTitle>Product videos</SectionTitle> <br />
					<Video muted startFrom={60} style={{width: width / 3}} src={data} />
				</div>
				<div>
					<SectionTitle>Personalized videos</SectionTitle> <br />
					<Video
						muted
						startFrom={120}
						style={{height: height / 2}}
						src={twitter}
					/>
				</div>
				<div>
					<SectionTitle>TikToks</SectionTitle> <br />
					<Video
						muted
						startFrom={180}
						style={{height: height / 2}}
						src={tiktok}
					/>
				</div>
			</div>
		</div>
	);
};
