import styled from 'styled-components';
import {CameraIcon} from './CameraIcon';
import {Card} from './Card';

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 55px;
	color: white;
	background: linear-gradient(to right, #6ab04c, #badc58);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: right;
	line-height: 1;
`;

export const StillFrames: React.FC = () => {
	return (
		<Card>
			<Title>
				<CameraIcon style={{height: 50, marginLeft: 25, color: '#badc58'}} />
				<div style={{fontSize: 35}}>Export</div>
				still frames
			</Title>
		</Card>
	);
};
