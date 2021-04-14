import React from 'react';
import {useCurrentFrame} from 'remotion';
import {CheckIcon} from './CheckIcon';

export const CheckCheckerboard: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<div>
			{new Array(20)
				.fill(true)
				.map((_, i) => i)
				.map((check) => {
					return (
						<div
							key={check}
							style={{
								height: 28,
								width: 10000,
							}}
						>
							{new Array(20)
								.fill(true)
								.map((_, i) => i)
								.map((c) => {
									return (
										<CheckIcon
											key={c}
											style={{
												color: 'white',
												opacity: 0.2,
												height: 20,
												marginRight: 20,
												transform: 'translateY(-' + (frame % 28) + 'px)',
											}}
										/>
									);
								})}
						</div>
					);
				})}
		</div>
	);
};
