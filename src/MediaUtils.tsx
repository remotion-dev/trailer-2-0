import React from 'react';
import styled from 'styled-components';
import {Cube} from './Cube';

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 36px;
	color: white;
	background: linear-gradient(to right, #000, #111);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.6;
	code {
		background-color: rgba(0, 0, 0, 0.08);
		padding: 8px 14px;
		border-radius: 10px;
	}
`;

export const MediaUtils: React.FC = () => {
	return (
		<div>
			<div
				style={{
					transform: `scale(0.4) translateY(-200px)`,
					width: 200,
					height: 200,
					marginLeft: 140,
				}}
			>
				<Cube />
			</div>
			<Title
				style={{
					transform: `translateY(-50px)`,
				}}
			>
				<code>@remotion/media-utils</code> <br />
				helper package
			</Title>
		</div>
	);
};
