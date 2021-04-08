import {Composition} from 'remotion';
import {Contributors} from './Contributors';
import {OtherFeatures} from './OtherFeatures';
import {ResizableFull} from './ResizableFull';

export const RemotionVideo: React.FC = () => {
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
		</>
	);
};
