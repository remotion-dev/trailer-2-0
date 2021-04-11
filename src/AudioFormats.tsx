import React from 'react';
import styled from 'styled-components';
import {Cd} from './Cd';

const Title = styled.div`
	font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 60px;
	color: white;
	background: linear-gradient(to right, #e67e22, #d35400);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: center;
	line-height: 1.1;
`;

export const AudioFormats: React.FC = () => {
	return (
		<div style={{textAlign: 'center'}}>
			<Cd />
			<br />
			<br />
			<Title style={{fontSize: 40}}>Export as</Title>
			<Title>MP3, WAV or AAC</Title>
		</div>
	);
};
