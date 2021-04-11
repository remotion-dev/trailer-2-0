import React from 'react';
import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import styled from 'styled-components';
import {DataDriven} from './DataDriven';
import {ESBuildTranspile} from './ESBuildTranspile';
import {FramePerfect} from './FramePerfectSeeking';
import {GifSupport} from './GifSupport';
import {Interpolate} from './Interpolate';
import {PartialRendering} from './PartialRendering';
import {Resizeable} from './ResizableEditorPanels';
import {RichTimeline} from './RichTimeline';
import {StillFrames} from './StillFrames';
import {TestsAdded} from './TestsAdded';
import {WebpackCaching} from './WebpackCaching';

const Outer = styled(AbsoluteFill)`
	background-color: white;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
	background-color: rgba(0, 0, 0, 0.04);
	display: flex;
	flex: 1;
	flex-direction: row;
	padding: 40px;
`;

export const OtherFeatures: React.FC = () => {
	const {width, height, fps, durationInFrames} = useVideoConfig();
	const frame = useCurrentFrame();
	const progress = (i: number): React.CSSProperties => {
		const p = spring({
			fps,
			frame: frame - i * 5,
			config: {
				damping: 100,
			},
		});
		const springOut = spring({
			fps,
			frame: frame - durationInFrames + 20 - i * 2,
			config: {
				damping: 100,
			},
		});
		return {
			transform: `translateX(${interpolate(
				p + springOut,
				[0, 1],
				[120, 0]
			)}px)`,
			opacity: p - interpolate(springOut, [0, 0.7], [0, 1]),
		};
	};
	return (
		<Outer>
			<Container style={{width, height}}>
				<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
					<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
						<div style={{flex: 1, display: 'flex', ...progress(0)}}>
							<ESBuildTranspile />
						</div>
						<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
							<div style={{flex: 1, display: 'flex', ...progress(1)}}>
								<RichTimeline />
							</div>
							<div
								style={{
									flex: 1,
									display: 'flex',
									...progress(2),
								}}
							>
								<TestsAdded />
							</div>
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
						<div
							style={{
								display: 'flex',
								flex: 1,
								...progress(3),
							}}
						>
							<PartialRendering />
						</div>
						<div
							style={{
								display: 'flex',
								flex: 1,
								...progress(4),
							}}
						>
							<FramePerfect />
						</div>
					</div>
				</div>
				<div style={{display: 'flex', flexDirection: 'column', flex: 3}}>
					<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
						<div style={{display: 'flex', flex: 3, ...progress(3)}}>
							<GifSupport />
						</div>
						<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
							<div
								style={{
									display: 'flex',
									flex: 1,
									...progress(4),
								}}
							>
								<Interpolate />
							</div>
							<div style={{display: 'flex', flex: 1, ...progress(5)}}>
								<StillFrames />
							</div>
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
						<div
							style={{
								display: 'flex',
								flex: 1,
								...progress(4),
							}}
						>
							<Resizeable />
						</div>
						<div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
							<div
								style={{
									display: 'flex',
									flex: 1,
									...progress(6),
								}}
							>
								<WebpackCaching />
							</div>
							<div
								style={{
									display: 'flex',
									flex: 1,
									...progress(7),
								}}
							>
								<DataDriven />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</Outer>
	);
};
