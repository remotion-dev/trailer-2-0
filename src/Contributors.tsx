import {chunk} from 'lodash';
import React, {useEffect, useState} from 'react';
import {
	AbsoluteFill,
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
	position: absolute;
	width: 100%;
`;

// const GITHUB_TOKEN = 'ghp_XXXXXXXX'
const GITHUB_TOKEN: string | null = null;

const getAll = () => {
	if (cache) {
		return Promise.resolve(cache as any[]);
	}
	return Promise.all(
		[1, 2, 3, 4, 5, 6].map((_) => {
			return fetch(
				`https://api.github.com/repos/JonnyBurger/remotion/compare/v1.0.6...ee8ed551e5479399e1539c7990f4041a879c105f?page=${_}`,
				GITHUB_TOKEN
					? {
							headers: {
								authorization: GITHUB_TOKEN,
							},
					  }
					: undefined
			)
				.then((res) => {
					return res.json();
				})
				.then((r) => r.commits);
		})
	);
};

let cache: any = null;
const delay = 65;

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
				cache = res;
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

	const startAnimation = spring({
		frame: frame - delay,
		fps,
		config: {
			damping: 200,
		},
	});

	const fontSize = interpolate(startAnimation, [0, 1], [300, 110], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<AbsoluteFill
			style={{
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					flex: 1,
				}}
			>
				<Title
					style={{
						fontSize,
						marginTop: interpolate(startAnimation, [0, 1], [320, 25]),
					}}
				>
					Thank you
				</Title>
				<div
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						flex: 1,
						marginTop: 160,
						marginLeft: 90,
					}}
				>
					{chunks.map((chunk, chunkI) => {
						return (
							<div>
								{chunk.map((user, i) => {
									const progress = spring({
										fps,
										frame: frame - delay - (i + chunkI * 7) / 2,
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
		</AbsoluteFill>
	);
};
