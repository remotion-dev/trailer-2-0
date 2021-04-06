import styled from 'styled-components';
import {Card} from './Card';

const Container = styled.div`
	margin-left: 10px;
	margin-right: 10px;
	overflow: hidden;
`;

const Title = styled.div`
	font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
		Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	font-weight: 700;
	font-size: 50px;
	color: white;
	background: linear-gradient(to right, #fff, #eee);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
	text-align: left;
`;

const Bar = styled.div`
	flex: 1;
	background-color: blue;
	display: flex;
	align-items: center;
	padding-left: 30px;
	border-radius: 30px;
	box-shadow: 0 15px 20px rgba(0, 0, 0, 0.07);
	padding-top: 16px;
	padding-bottom: 16px;
`;

export const RichTimeline: React.FC = () => {
	return (
		<Card>
			<Container
				style={{
					flex: 1,
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				<Bar
					style={{
						background: 'linear-gradient(to bottom, #3697e1, #348AC7 60%)',
						width: '60%',
					}}
				>
					<Title>Rich</Title>
				</Bar>
				<div style={{height: 8}} />
				<Bar
					style={{
						background: 'linear-gradient(rgb(16 171 58), rgb(43 165 63) 60%)',
						width: '90%',
					}}
				>
					<Title>Timeline</Title>
				</Bar>
			</Container>
		</Card>
	);
};
