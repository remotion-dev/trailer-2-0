import {getAudioDuration} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {Composition, continueRender, delayRender} from 'remotion';
import {AudioDemo} from './AudioDemo';
import {Contributors} from './Contributors';
import {Master} from './Master';
import {OtherFeatures} from './OtherFeatures';
import {ResizableFull} from './ResizableFull';
import voiceover from './voiceover.wav';

export const RemotionVideo: React.FC = () => {
	const [handle] = useState(() => delayRender());
	const [length, setLength] = useState<number | null>(null);

	useEffect(() => {
		getAudioDuration(voiceover)
			.then((l) => {
				setLength(l);
				continueRender(handle);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [handle]);

	if (!length) {
		return null;
	}

	return (
		<>
			<Composition
				id="OtherFeatures"
				component={OtherFeatures}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="Contributors"
				component={Contributors}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="resizeable"
				component={ResizableFull}
				durationInFrames={Math.floor(Math.PI * 2 * 30)}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="audio-demo"
				component={AudioDemo}
				durationInFrames={600}
				fps={30}
				width={1080}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="master"
				component={Master}
				durationInFrames={Math.floor(length * 30)}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
		</>
	);
};
