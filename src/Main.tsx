import React from 'react';
import {Audio, Sequence, useVideoConfig} from 'remotion';
import {AudioDemo} from './AudioDemo';
import {AudioFeatures} from './AudioFeatures';
import {AUDIO_FEATURES_START} from './AudioVisualization';
import {Contributors} from './Contributors';
import {EndCard} from './EndCard';
import {Install} from './Install';
import {Intro} from './Intro';
import {OtherFeatures} from './OtherFeatures';
import {PreviousRelease} from './PreviousRelease';
import voiceover from './res/voiceover.wav';
import {Showcase} from './Showcase';
import {Transition} from './Transition';
import {TwoPointOh} from './TwoPointOh';

export const Main: React.FC = () => {
	const {durationInFrames} = useVideoConfig();
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
			<Sequence from={503} durationInFrames={430}>
				<AudioDemo />
			</Sequence>
			<Sequence from={AUDIO_FEATURES_START} durationInFrames={267}>
				<AudioFeatures />
			</Sequence>
			<Sequence from={1200} durationInFrames={300}>
				<OtherFeatures />
			</Sequence>
			<Sequence from={1500} durationInFrames={170}>
				<PreviousRelease />
			</Sequence>
			<Sequence from={1630} durationInFrames={300}>
				<Transition type="in">
					<Contributors />
				</Transition>
			</Sequence>
			<Sequence from={1900} durationInFrames={320}>
				<Transition type="in">
					<Install />
				</Transition>
			</Sequence>
			<Sequence from={2220} durationInFrames={300}>
				<EndCard />
			</Sequence>
			{/**
			 * 
			 * // Removed outro music because it is copyrighted.
			<Sequence
				from={durationInFrames - END_CARD_LENGTH - 150}
				durationInFrames={END_CARD_LENGTH + 150}
			>
				<Audio
					src={radiostar}
					startAt={10}
					volume={(f) =>
						interpolate(f, [30, 150], [0, 1], {
							extrapolateLeft: 'clamp',
							extrapolateRight: 'clamp',
						})
					}
				/>
			</Sequence>
						*/}
		</div>
	);
};
