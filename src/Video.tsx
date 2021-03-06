import {getAudioDuration} from '@remotion/media-utils';
import {useEffect, useState} from 'react';
import {Composition, continueRender, delayRender} from 'remotion';
import {AudioDemo} from './AudioDemo';
import {AudioFeatures} from './AudioFeatures';
import {Contributors} from './Contributors';
import {Cube} from './Cube';
import {EndCard} from './EndCard';
import {END_CARD_LENGTH} from './EndCardLength';
import {Hype} from './Hype';
import {Intro} from './Intro';
import {Main} from './Main';
import {OtherFeatures} from './OtherFeatures';
import {PreviousRelease} from './PreviousRelease';
import voiceover from './res/voiceover.wav';
import {ResizableFull} from './ResizableFull';
import {Showcase} from './Showcase';
import {Thumbnail} from './Thumbnail';

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
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="main"
				component={Main}
				durationInFrames={Math.floor(length * 30) + END_CARD_LENGTH}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="intro"
				component={Intro}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="showcase"
				component={Showcase}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{}}
			/>
			<Composition
				id="audio-features"
				component={AudioFeatures}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="cube"
				component={Cube}
				durationInFrames={300}
				fps={30}
				width={400}
				height={400}
			/>
			<Composition
				id="previous-release"
				component={PreviousRelease}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="endcard"
				component={EndCard}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="hype"
				component={Hype}
				durationInFrames={300}
				fps={30}
				width={400}
				height={400}
			/>
			<Composition
				id="thumbnail"
				component={Thumbnail}
				durationInFrames={300}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
