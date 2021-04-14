import React from 'react';
import {AudioDemo} from './AudioDemo';

export const Thumbnail: React.FC = () => {
	return (
		<div style={{transform: `scale(1.6)`, flex: 1, display: 'flex'}}>
			<AudioDemo />
		</div>
	);
};
