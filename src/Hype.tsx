import React from 'react';
import {Easing, interpolate, useCurrentFrame} from 'remotion';
import {HeartIcon} from './HeartIcon';
import {HypeIcon} from './HypeIcon';

export const Hype: React.FC = () => {
	const duration = 60;
	const frame = useCurrentFrame();
	const one = interpolate(frame % duration, [0, duration / 2], [0, 1], {
		easing: Easing.ease,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const two = interpolate(frame % duration, [duration / 2, duration], [0, 1], {
		easing: Easing.ease,
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	return (
		<div
			style={{
				width: 400,
				height: 400,
				backgroundColor: 'white',
				display: 'inline-block',
				position: 'relative',
			}}
		>
			<div
				style={{
					height: 200,
					width: 200,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					left: interpolate(one, [0, 1], [0, 200]),
					top: interpolate(two, [0, 1], [0, 200]),
				}}
			>
				<HeartIcon style={{height: 120, color: '#d82840'}} />
			</div>
			<div
				style={{
					height: 200,
					width: 200,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					left: interpolate(two, [0, 1], [200, 0]),
					top: interpolate(one, [0, 1], [0, 200]),
				}}
			>
				<HypeIcon style={{height: 120, color: '#19cf86'}} />
			</div>
			<div
				style={{
					height: 200,
					width: 200,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					left: interpolate(two, [0, 1], [0, 200]),
					top: interpolate(one, [0, 1], [200, 0]),
				}}
			>
				<HypeIcon style={{height: 120, color: '#19cf86'}} />
			</div>
			<div
				style={{
					height: 200,
					width: 200,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					position: 'absolute',
					left: interpolate(one, [0, 1], [200, 0]),
					top: interpolate(two, [0, 1], [200, 0]),
				}}
			>
				<HeartIcon style={{height: 120, color: '#d82840'}} />
			</div>
		</div>
	);
};
