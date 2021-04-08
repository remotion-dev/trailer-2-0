import React from 'react';
import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 600px;
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: bold;
`;

export const TwoPointOh: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<div
			style={{
				backgroundColor: 'white',
				flex: 1,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Title style={{}}>2.0</Title>
		</div>
	);
};
