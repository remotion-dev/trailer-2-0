import React from 'react';
import {AbsoluteFill, useVideoConfig} from 'remotion';
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
	const {width, height} = useVideoConfig();
	return (
		<Outer>
			<Container style={{width, height}}>
				<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
					<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
						<ESBuildTranspile />
						<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
							<RichTimeline />
							<TestsAdded />
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
						<PartialRendering />
						<FramePerfect />
					</div>
				</div>
				<div style={{display: 'flex', flexDirection: 'column', flex: 3}}>
					<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
						<div style={{display: 'flex', flex: 3}}>
							<GifSupport />
						</div>
						<div style={{display: 'flex', flexDirection: 'column', flex: 2}}>
							<Interpolate />
							<StillFrames />
						</div>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
						<Resizeable />
						<div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
							<WebpackCaching />
							<DataDriven />
						</div>
					</div>
				</div>
			</Container>
		</Outer>
	);
};
