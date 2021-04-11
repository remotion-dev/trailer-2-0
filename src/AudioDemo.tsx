import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {AudioTag} from './AudioTag';

export const AudioDemo: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const progress = spring({
		frame: frame - 10,
		fps,
		config: {
			damping: 200,
		},
	});

	const framePosition = interpolate(progress, [0, 1], [1200, 0]);
	const otherScale = spring({
		frame: frame - 120,
		fps,
		config: {
			damping: 200,
		},
	});

	const cut = interpolate(
		spring({
			fps,
			frame: frame - 180,
			config: {
				damping: 200,
			},
		}),
		[0, 1],
		[0, 180]
	);

	const trim = interpolate(
		spring({
			fps,
			frame: frame - 200,
			config: {
				damping: 200,
			},
		}),
		[0, 1],
		[0, 180]
	);

	const align = spring({
		fps,
		frame: frame - 220,
		config: {
			damping: 200,
		},
	});

	const volumeSpring = spring({
		fps,
		frame: frame - 260,
		config: {
			damping: 200,
		},
	});

	const volumeCustom = spring({
		fps,
		frame: frame - 310,
		config: {
			damping: 200,
		},
	});

	const volume1 = (i: number) => {
		const wave = interpolate(i, [0, 10, 90, 100], [0, 0.9, 0.9, 0]);
		return interpolate(volumeCustom, [0, 1], [volumeSpring * 0.8, wave]);
	};
	const volume2 = (i: number) => {
		const wave = interpolate(
			i,
			[0, 50, 60, 80, 90, 100],
			[0.9, 0.9, 0.1, 0.1, 0.9, 0.9]
		);
		return interpolate(volumeCustom, [0, 1], [volumeSpring * 0.6, wave]);
	};

	const volume3 = (i: number) => {
		const sinus = (Math.sin(i / 8) + 1) / 2;
		const wave = interpolate(sinus, [0, 1], [0.2, 0.8]);
		return interpolate(volumeCustom, [0, 1], [volumeSpring * 0.3, wave]);
	};

	const overlay = interpolate(
		frame,
		[durationInFrames - 30, durationInFrames - 5],
		[0, 1]
	);

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'white',
				flex: 1,
				flexDirection: 'column',
			}}
		>
			<AudioTag
				seed={0}
				trimLeft={cut}
				trimRight={0}
				offset={align * -300}
				scale={otherScale}
				volume={volume1}
			/>
			<br />
			<div
				style={{
					transform: `translateY(${framePosition}px)`,
				}}
			>
				<AudioTag
					seed={1}
					trimLeft={0}
					trimRight={trim}
					offset={align * 90}
					scale={1}
					volume={volume2}
				/>
			</div>
			<br />
			<AudioTag
				seed={2}
				trimLeft={0}
				trimRight={0}
				offset={align * 240}
				scale={otherScale}
				volume={volume3}
			/>
			<AbsoluteFill style={{backgroundColor: 'white', opacity: overlay}}>
				<AbsoluteFill style={{backgroundColor: 'rgba(0, 0, 0, 0.04)'}} />
			</AbsoluteFill>
		</div>
	);
};
