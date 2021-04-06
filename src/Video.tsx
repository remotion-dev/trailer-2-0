import {Composition} from 'remotion';
import {Contributors} from './Contributors';
import {OtherFeatures} from './OtherFeatures';

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
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Contributors"
				component={Contributors}
				durationInFrames={600}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
