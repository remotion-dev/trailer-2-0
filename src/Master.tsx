import React from 'react';
import {Audio, Sequence} from 'remotion';
import {AudioDemo} from './AudioDemo';
import voiceover from './voiceover.wav';

export const Master: React.FC = () => {
	return (
		<div>
			<Audio src={voiceover} />
			<Sequence from={522} durationInFrames={400}>
				<AudioDemo />
			</Sequence>
		</div>
	);
};
