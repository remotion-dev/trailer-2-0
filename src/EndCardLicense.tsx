import styled from 'styled-components';

const Container = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-weight: 700;
	font-family: -apple-system, BlinkMacSystemFont;
	font-size: 30px;
	margin-bottom: 5px;
`;

const YarnCreateVideo = styled.div`
	font-weight: 700;
	font-size: 60px;
	font-family: -apple-system, BlinkMacSystemFont;
	background: linear-gradient(to right, #6ab04c, #badc58);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-text-fill-color: transparent;
	text-fill-color: transparent;
`;

export const EndCardLicense: React.FC = () => {
	return (
		<Container>
			<Title>Get a company license:</Title>
			<YarnCreateVideo>companies.remotion.dev</YarnCreateVideo>
		</Container>
	);
};
