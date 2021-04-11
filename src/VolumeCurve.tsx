import React, {useEffect, useRef} from 'react';
const TIMELINE_LAYER_HEIGHT = 110;

export const VolumeCurve: React.FC<{
	volume: (i: number) => number;
	visualizationWidth: number;
}> = ({volume, visualizationWidth}) => {
	const canvas = useRef<HTMLCanvasElement>(null);
	useEffect(() => {
		if (!canvas.current) {
			return;
		}
		const context = canvas.current.getContext('2d');
		if (!context) {
			return;
		}
		context.clearRect(0, 0, visualizationWidth, TIMELINE_LAYER_HEIGHT);

		const volumes = new Array(100).fill(1).map((v, _) => volume(_));

		context.beginPath();
		context.moveTo(0, TIMELINE_LAYER_HEIGHT);
		volumes.forEach((v, index) => {
			const x = (index / (volumes.length - 1)) * visualizationWidth;
			const y = (1 - v) * TIMELINE_LAYER_HEIGHT + 1;
			if (index === 0) {
				context.moveTo(x, y);
			} else {
				context.lineTo(x, y);
			}
		});
		context.lineWidth = 3;
		context.strokeStyle = 'rgba(255, 255, 255, 0.7)';
		context.stroke();
	}, [visualizationWidth, volume]);
	return (
		<canvas
			ref={canvas}
			style={{
				position: 'absolute',
			}}
			width={visualizationWidth}
			height={TIMELINE_LAYER_HEIGHT}
		/>
	);
};
