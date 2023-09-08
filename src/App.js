import styled from "styled-components";
import { useState } from "react";

import mainimg from "./assets/main.png";
import me3 from "./assets/me3.png";

const Container = styled.div`
	font-family: "GmarketSansMedium";
`;

const Header = styled.header`
	/* background-color: black; */
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100vw;
	opacity: 0.5s;
`;

const StyledHdTitle = styled.div``;

const StyledTitle = styled.div`
	color: white;
	font-size: 40px;
	padding: 20px 40px;
	font-weight: bold;
`;

const StyledHdMenu = styled.div`
	display: flex;
	align-items: center;
`;

const StyledMenuUl = styled.ul`
	list-style: none;
`;

const StyledMenuLi = styled.li`
	color: white;
	float: left;
	margin-right: 40px;
	font-size: 30px;
`;

const StyledMain1 = styled.div`
	width: 100vw;
	height: 100vh;
	/* background-image: url(${mainimg}); */
	background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
		url(${mainimg});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImgBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledImgMe = styled.div`
	background-image: url(${me3});
	background-repeat: no-repeat;
	background-position: center center;
	margin-top: 100px;
	width: 400px;
	height: 400px;
	background-color: yellow;
	border-radius: 50%;
`;

const StyledName = styled.div`
	font-size: 60px;
	font-weight: bold;
	color: white;
	margin-top: 20px;
`;

const StyledIntro = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: white;
`;

function App() {
	const [isVisible, setIsVisible] = useState(false);

	return (
		<Container>
			<Header>
				<StyledHdTitle>
					<StyledTitle>Portfolio</StyledTitle>
				</StyledHdTitle>
				<StyledHdMenu>
					<StyledMenuUl>
						<StyledMenuLi>Profile</StyledMenuLi>
						<StyledMenuLi>Skills</StyledMenuLi>
						<StyledMenuLi>Projects</StyledMenuLi>
						<StyledMenuLi>Contact</StyledMenuLi>
					</StyledMenuUl>
				</StyledHdMenu>
			</Header>
			<StyledMain1>
				<StyledImgBox>
					<StyledImgMe></StyledImgMe>
				</StyledImgBox>
				<StyledName>HONG YUN SU</StyledName>
				<StyledIntro>I’m front-end developer</StyledIntro>
			</StyledMain1>
			<div>adf</div>
			<div>adf</div>
			<div>adf</div>
			<div>adf</div>
		</Container>
	);
}

export default App;
