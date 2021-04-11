import 'hack-font/build/web/hack.css';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {InstallFrame} from './InstallFrame';

const Container = styled(AbsoluteFill)`
	background-color: white;
	justify-content: center;
	align-items: center;
`;

export const Install: React.FC = () => {
	const frame = useCurrentFrame();
	const {fps, durationInFrames} = useVideoConfig();
	const progress = spring({
		frame: frame - 90,
		fps,
		config: {
			damping: 200,
		},
	});

	const framePosition = interpolate(progress, [0, 1], [1200, 0]);

	const frameOpacity = interpolate(
		frame,
		[durationInFrames - 30, durationInFrames],
		[1, 0]
	);

	const grayOpacity = interpolate(
		frame,
		[durationInFrames - 10, durationInFrames],
		[0, 1]
	);
	return (
		<Container>
			<AbsoluteFill
				style={{
					backgroundColor: 'rgba(0, 0, 0, 0.04)',
					opacity: grayOpacity,
				}}
			/>
			<div
				style={{
					transform: `translateY(${framePosition}px)`,
					opacity: frameOpacity,
				}}
			>
				<InstallFrame />
			</div>
		</Container>
	);
};
