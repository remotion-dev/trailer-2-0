import {chunk} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
	continueRender,
	delayRender,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {SingleContributor} from './SingleContributor';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 110px;
	color: black;
	text-align: center;
	line-height: 1.1;
	margin-top: 30px;
`;

const getAll = () => {
	return Promise.all(
		[1, 2, 3, 4, 5, 6].map((_, i) => {
			return fetch(
				`https://api.github.com/repos/JonnyBurger/remotion/compare/v1.0.6...main?page=${_}`,
				{
					headers: {
						authorization: `token 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`,
					},
				}
			)
				.then((res) => {
					return res.json();
				})
				.then((r) => r.commits);
		})
	);
};

export const Contributors: React.FC = () => {
	const [handle] = useState(() => delayRender());
	const [data, setData] = useState(null);
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	useEffect(() => {
		getAll()
			.then((datas) => {
				return (datas as any[]).flat(1);
			})
			.then((res) => {
				setData(res);
				continueRender(handle);
			});
	}, [handle]);

	if (!data) {
		return null;
	}
	const avatars: {[key: string]: string} = {};
	const counts: {[key: string]: number} = {};
	data.forEach((d) => {
		if (!d?.author) {
			return;
		}
		const {login, avatar_url} = d.author;
		avatars[login] = avatar_url;
		if (!counts[login]) {
			counts[login] = 0;
		}
		counts[login]++;
	});
	const sortByCounts = Object.keys(counts)
		.sort((a, b) => counts[a] - counts[b])
		.reverse()
		.filter(
			(u) =>
				!u.includes('JonnyBurger') &&
				!u.includes('dependabot') &&
				!u.includes('github-actions')
		);

	const chunks = chunk(sortByCounts, 7);

	return (
		<div
			style={{
				backgroundColor: 'white',
				flex: 1,
			}}
		>
			<Title>Thank you</Title>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					flex: 1,
					marginTop: 20,
					marginLeft: 90,
				}}
			>
				{chunks.map((chunk, chunkI) => {
					return (
						<div>
							{chunk.map((user, i) => {
								const progress = spring({
									fps,
									frame: frame - (i + chunkI * 7) / 2,
									config: {
										damping: 100,
									},
								});
								const p = interpolate(progress, [0, 1], [1000, 0]);
								return (
									<SingleContributor
										avatar={avatars[user]}
										commits={counts[user]}
										name={user}
										style={{
											transform: `translateY(${p}px)`,
											opacity: progress,
										}}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
