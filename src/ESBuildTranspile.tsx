import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {Card} from './Card';
import {LightningBolt} from './LightningBolt';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 110px;
	color: black;
	text-align: center;
	line-height: 1.1;
`;

export const ESBuildTranspile: React.FC = () => {
	const frame = useCurrentFrame();
	const bolt = Math.sin(frame / 12);
	return (
		<Card
			style={{
				background: 'linear-gradient(to right, #f5ad43, #ffcf00)',
			}}
		>
			<Title>
				<LightningBolt
					style={{
						height: 70,
						color: 'black',
						marginRight: 15,
						marginLeft: -30,
						transform: `rotateY(${bolt * 45}deg)`,
						filter: `drop-shadow(0 0 20px white)`,
					}}
				/>
				ESBuild
				<div style={{fontSize: 30}}>Transpilation by default</div>
			</Title>
		</Card>
	);
};
