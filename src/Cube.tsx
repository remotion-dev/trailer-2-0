import React from 'react';
import {useCurrentFrame} from 'remotion';
import './cube.css';
import {FnIcon} from './Fn';
import {InfoIcon} from './InfoIcon';
import {Note} from './Note';
import {RulerIcon} from './RulerIcon';
import {WaveformIcon} from './WaveformIcon';

export const Cube: React.FC = () => {
	const frame = useCurrentFrame();
	const rotation = frame * 2;
	return (
		<div className="container">
			<div
				className="cube"
				style={{
					transform: `rotateX(${rotation}deg) rotateY(${rotation}deg)`,
				}}
			>
				<div className="face front">
					<WaveformIcon
						style={{height: 100, color: 'rgba(255, 255, 255, 0.5)'}}
					/>
				</div>
				<div className="face back" />
				<div className="face right">
					<RulerIcon style={{height: 100, color: 'rgba(255, 255, 255, 0.5)'}} />
				</div>
				<div className="face left">
					<InfoIcon style={{height: 100, color: 'rgba(255, 255, 255, 0.5)'}} />
				</div>
				<div className="face top">
					<Note style={{height: 100, color: 'rgba(255, 255, 255, 0.5)'}} />
				</div>
				<div className="face bottom">
					<FnIcon style={{height: 100, color: 'rgba(255, 255, 255, 0.5)'}} />
				</div>
			</div>
		</div>
	);
};
