import React, {SVGProps} from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const MutedIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
	const frame = useCurrentFrame();
	const driver = (Math.sin(frame / 20) + 1) / 2;
	const clamped = interpolate(driver, [0.3, 0.7], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const scale = 0.8 + clamped * 0.3;
	const s = clamped * 150;
	const {style, ...otherProps} = props;
	return (
		<svg
			aria-hidden="true"
			focusable="false"
			data-prefix="fas"
			data-icon="volume-mute"
			className="svg-inline--fa fa-volume-mute fa-w-16"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 512 512"
			style={{
				...style,
				transform: `scale(${scale})`,
			}}
			{...otherProps}
		>
			<path
				fill="currentColor"
				transform={`translate(${s} 0)`}
				d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97z"
			/>
			<path
				fill="currentColor"
				transform={`translate(${s * -1} 0)`}
				d="M461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"
			/>
		</svg>
	);
};
