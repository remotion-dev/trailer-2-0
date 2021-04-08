import React from 'react';
import {Resizeable} from './ResizableEditorPanels';

export const ResizableFull: React.FC = () => {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'white',
			}}
		>
			<div
				style={{
					height: 540,
					width: 540,
					display: 'flex',
				}}
			>
				<Resizeable />
			</div>
		</div>
	);
};
