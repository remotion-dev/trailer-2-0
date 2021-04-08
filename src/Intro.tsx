import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';
import tweet from './tweet.png';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex: 1;
	background-color: white;
`;

const Tweet = styled(Img)`
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Intro: React.FC = () => {
	return (
		<Container>
			<Tweet
				src={tweet}
				style={{
					borderRadius: 15,
				}}
			/>
		</Container>
	);
};
