import React from 'react';
import {AudioTag} from './AudioTag';

export const AudioDemo: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'white',
				flex: 1,
				flexDirection: 'column',
			}}
		>
			<AudioTag seed={0} trimLeft={0} trimRight={0} offset={0} />
			<br />
			<AudioTag seed={1} trimLeft={0} trimRight={0} offset={0} />
			<br />
			<AudioTag seed={2} trimLeft={100} trimRight={100} offset={0} />
		</div>
	);
};
