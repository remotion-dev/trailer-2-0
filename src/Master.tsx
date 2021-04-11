import React from 'react';
import {Audio, Sequence} from 'remotion';
import {AudioDemo} from './AudioDemo';
import {AudioFeatures} from './AudioFeatures';
import {AUDIO_FEATURES_START} from './AudioVisualization';
import {Contributors} from './Contributors';
import {Intro} from './Intro';
import {OtherFeatures} from './OtherFeatures';
import {PreviousRelease} from './PreviousRelease';
import {Showcase} from './Showcase';
import {TwoPointOh} from './TwoPointOh';
import voiceover from './voiceover.wav';

export const Master: React.FC = () => {
	return (
		<div>
			<Audio src={voiceover} />
			<Sequence from={0} durationInFrames={190}>
				<Intro />
			</Sequence>
			<Sequence from={190} durationInFrames={389 - 190}>
				<Showcase />
			</Sequence>
			<Sequence from={389} durationInFrames={114}>
				<TwoPointOh />
			</Sequence>
			<Sequence from={503} durationInFrames={400}>
				<AudioDemo />
			</Sequence>
			<Sequence from={AUDIO_FEATURES_START} durationInFrames={297}>
				<AudioFeatures />
			</Sequence>
			<Sequence from={1200} durationInFrames={300}>
				<OtherFeatures />
			</Sequence>
			<Sequence from={1500} durationInFrames={150}>
				<PreviousRelease />
			</Sequence>
			<Sequence from={1700} durationInFrames={150}>
				<Contributors />
			</Sequence>
		</div>
	);
};
