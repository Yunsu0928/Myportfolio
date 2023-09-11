import styled from "styled-components";
import { useState, useEffect } from "react";

import mainimg from "./assets/main.png";
import me4 from "./assets/me4.png";
import me3 from "./assets/me3.png";

import AOS from "aos";

const Container = styled.div`
	font-family: "GmarketSansMedium";
`;

const Header = styled.header`
	/* background-color: none; */
	background-color: ${({ isScrolled }) => (isScrolled ? "white" : "none")};
	color: ${({ isScrolled }) => (isScrolled ? "black" : "white")};
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100vw;
	opacity: 0.5s;
	z-index: 1;
`;

const StyledHdTitle = styled.div``;

const StyledTitle = styled.div`
	font-size: 40px;
	padding: 20px 40px;
	font-weight: bold;
	@media screen and (max-width: 1024px) {
		font-size: 30px;
	}
`;

const StyledHdMenu = styled.div`
	display: flex;
	align-items: center;
`;

const StyledMenuUl = styled.ul`
	list-style: none;
`;

const StyledMenuLi = styled.li`
	float: left;
	margin-right: 40px;
	font-size: 30px;
	@media screen and (max-width: 1024px) {
		font-size: 20px;
		margin-right: 20px;
	}
`;

const StyledMain1 = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
		url(${mainimg});
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 1024px) {
		background-size: cover;
	}
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
	@media screen and (max-width: 1024px) {
		margin-top: 50px;
		margin-bottom: 20px;
		width: 300px;
		height: 300px;
		background-size: cover;
	}
`;

const StyledName = styled.div`
	font-size: 60px;
	font-weight: bold;
	color: white;
	margin-top: 20px;
	@media screen and (max-width: 1024px) {
		font-size: 40px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
`;

const StyledIntro = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: white;
	@media screen and (max-width: 1024px) {
		font-size: 30px;
	}
`;

const StyledMain2 = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #efefef;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const StyledImgMe2 = styled.div`
	background-image: url(${me4});
	background-repeat: no-repeat;
	background-size: 230px 220px;
	background-position: center center;
	width: 250px;
	height: 250px;
	background-color: gray;
	border-radius: 50%;
	margin-left: 100px;
	margin-top: 20px;
	@media screen and (max-width: 1050px) {
		background-size: 150px 150px;
		width: 200px;
		height: 200px;
		border-radius: 50%;
		margin-left: 50px;
		margin-top: 0px;
	}
`;

const StyledMsgBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
	margin-right: 30px;
	@media screen and (max-width: 1024px) {
		margin-top: 20px;
		margin-left: 20px;
	}
`;

const StyledMsg = styled.div`
	font-size: 55px;
	margin-bottom: 30px;
	font-weight: bold;
	@media screen and (max-width: 1500px) {
		font-size: 45px;
	}
	@media (max-width: 1260px) {
		font-size: 35px;
	}
	@media (max-width: 1024px) {
		font-size: 30px;
	}
	@media (max-width: 860px) {
		font-size: 20px;
	}
`;

function App() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 930) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	AOS.init();

	return (
		<Container>
			<Header isScrolled={isScrolled}>
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
					<StyledImgMe
						data-aos="flip-left"
						data-aos-delay="100"
						data-aos-duration="3000"
					></StyledImgMe>
				</StyledImgBox>
				<StyledName
					data-aos="fade-up"
					data-aos-delay="300"
					data-aos-duration="2000"
				>
					HONG YUN SU
				</StyledName>
				<StyledIntro
					data-aos="fade-up"
					data-aos-delay="500"
					data-aos-duration="2000"
				>
					I’m front-end developer
				</StyledIntro>
			</StyledMain1>
			{/* <div data-aos="fade-up">123123123123</div>
			<div data-aos="fade-right">123123123</div>
			<div>adf</div>
			<StyledTest>adf</StyledTest> */}

			<StyledMain2>
				<StyledImgMe2></StyledImgMe2>
				<StyledMsgBox>
					<StyledMsg
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="2000"
					>
						원활한 커뮤니케이션과
					</StyledMsg>
					<StyledMsg
						data-aos="fade-up"
						data-aos-delay="400"
						data-aos-duration="2000"
					>
						협업능력을 바탕으로
					</StyledMsg>
					<StyledMsg
						data-aos="fade-up"
						data-aos-delay="600"
						data-aos-duration="2000"
					>
						더 나은 솔루션을 찾아내는 것을 추구합니다
					</StyledMsg>
				</StyledMsgBox>
			</StyledMain2>
			<div>main3 Skills</div>
			<div>main4 Projects</div>
		</Container>
	);
}

export default App;
