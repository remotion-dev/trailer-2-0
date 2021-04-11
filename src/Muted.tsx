import React from 'react';
import styled from 'styled-components';
import {MutedIcon} from './MutedIcon';

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

export const Muted: React.FC = () => {
	return (
		<div
			style={{
				textAlign: 'center',
				background: 'linear-gradient(to right, #c0392b, #e74c3c)',
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				color: 'white',
				height: '100%',
				justifyContent: 'center',
			}}
		>
			<MutedIcon style={{height: 100, color: '#eee'}} /> <br /> <br />
			<Title>
				<code>muted</code> prop
			</Title>
		</div>
	);
};
