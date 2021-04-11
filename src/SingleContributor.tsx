import React from 'react';
import {Img} from 'remotion';
import styled from 'styled-components';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 36px;
	color: black;
	line-height: 1.1;
`;

const Commits = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-size: 30px;
	color: black;
	line-height: 1.1;
	margin-top: 4px;
`;

export const SingleContributor: React.FC<{
	commits: number;
	name: string;
	avatar: string;
	style: React.CSSProperties;
}> = ({commits, name, avatar, style}) => {
	return (
		<div
			style={{
				fontSize: 50,
				flexDirection: 'row',
				display: 'flex',
				alignItems: 'center',
				marginTop: 20,
				marginBottom: 20,
				width: 450,
				...style,
			}}
		>
			<Img
				style={{height: 100, width: 100, borderRadius: 10, marginRight: 15}}
				src={avatar}
			/>
			<div>
				<Title> {name}</Title>{' '}
				<Commits>
					{commits} {commits === 1 ? 'commit' : 'commits'}
				</Commits>
			</div>
		</div>
	);
};
