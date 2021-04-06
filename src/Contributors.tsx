import React, {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
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
	margin-top: 50px;
`;
const getAll = () => {
	return Promise.all(
		[1, 2, 3].map((_, i) => {
			return fetch(
				`https://api.github.com/repos/JonnyBurger/remotion/compare/v1.5.4...945d750f959b9698bc3caa8aa337e06a3c48b45f?page=${_}`,
				{
					headers: {
						authorization: btoa(
							`jonnyburger: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`
						),
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
		if (!d.author) {
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
		.filter((u) => !u.includes('JonnyBurger') && !u.includes('dependabot'));
	console.log(sortByCounts);

	const half = Math.ceil(sortByCounts.length / 2);

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
					alignItems: 'center',
					flex: 1,
					marginTop: 50,
				}}
			>
				<div style={{marginRight: 150}}>
					{sortByCounts.slice(0, half).map((user) => {
						return (
							<SingleContributor
								avatar={avatars[user]}
								commits={counts[user]}
								name={user}
							/>
						);
					})}
				</div>
				<div style={{marginRight: 150}}>
					{sortByCounts.slice(half).map((user) => {
						return (
							<SingleContributor
								avatar={avatars[user]}
								commits={counts[user]}
								name={user}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
