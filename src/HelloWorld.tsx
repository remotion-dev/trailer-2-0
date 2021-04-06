import {useState} from 'react';
import {Audio, delayRender} from 'remotion';

export const HelloWorld: React.FC = () => {
	const [handle] = useState(() => delayRender());
	const [audioSrc, setAudioSrc] = useState<string | null>(null);

	if (!audioSrc) {
		return null;
	}

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<Audio src={audioSrc} />
		</div>
	);
};
