import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex: 1;
	background: linear-gradient(to right, #d35400, #e67e22);
	height: 100%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 40px;
	color: white;
	background: linear-gradient(to right, #fff, #eee);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.3;
	code {
		background-color: rgba(255, 255, 255, 0.08);
		padding: 8px 14px;
		border-radius: 10px;
	}
`;

const Player = styled.div`
	height: 150px;
	width: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(255, 255, 255, 0.2);
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
	border-radius: 8px;
`;

const Bar = styled.div`
	width: 10px;
	background-color: white;
	display: inline-block;
	border-radius: 7px;
	margin-left: 3px;
	margin-right: 3px;
`;

export const AudioFromVideo: React.FC = () => {
	const frame = useCurrentFrame();
	const height = (inv: boolean) =>
		interpolate(
			((inv ? Math.cos : Math.sin)(frame / 5) + 1) / 2,
			[0, 1],
			[20, 40]
		);
	return (
		<Container>
			<Player>
				<Bar style={{height: height(true)}} />
				<Bar style={{height: height(false)}} />
				<Bar style={{height: height(true)}} />
				<Bar style={{height: height(false)}} />
				<Bar style={{height: height(true)}} />
			</Player>
			<br />
			<Title>
				Audio from <code>&lt;Video&gt;</code> tags
			</Title>
		</Container>
	);
};
