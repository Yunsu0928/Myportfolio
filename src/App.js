import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";

import { BsGithub } from "react-icons/bs";
import { BiLogoFigma, BiNotepad } from "react-icons/bi";

import mainimg from "./assets/main.png";
import me4 from "./assets/me4.png";
import me3 from "./assets/me3.png";
import html from "./assets/icon-html.png";
import css from "./assets/icon-css.png";
import js from "./assets/icon-js.png";
import react from "./assets/icon-react.png";
import style from "./assets/icon-styled-components.png";
import node from "./assets/icon-nodejs.png";
import koreatourism from "./assets/koreatourism.png";
import koreagif from "./assets/gif/koreatourism.gif";
import stackover from "./assets/stackoverflow.png";
import stackgif from "./assets/gif/stackoverflow.gif";
import todo from "./assets/todolist.png";
import todogif from "./assets/gif/todolist.gif";

const Container = styled.div`
	font-family: "GmarketSansMedium";
	overflow: hidden;
	max-width: 100vw;
`;

const Header = styled.header`
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
	@media (max-width: 680px) {
		font-size: 25px;
		padding: 10px 20px;
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
	a {
		text-decoration: none;
		&:visited {
			color: inherit;
		}
	}
	@media screen and (max-width: 1024px) {
		font-size: 20px;
		margin-right: 20px;
	}
	@media (max-width: 680px) {
		font-size: 15px;
	}
	@media (max-width: 575px) {
		font-size: 10px;
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
		background-size: 200px 220px;
	}
	@media (max-width: 390px) {
		margin-top: 30px;
		margin-bottom: 20px;
		width: 200px;
		height: 200px;
		background-size: 150px 170px;
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
	@media (max-width: 390px) {
		font-size: 30px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	@media (max-width: 255px) {
		font-size: 25px;
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
	@media (max-width: 390px) {
		font-size: 20px;
	}
	@media (max-width: 255px) {
		font-size: 15px;
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
	@media (max-width: 646px) {
		background-size: 100px 100px;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		margin-left: 30px;
		margin-top: 0px;
	}
	@media (max-width: 500px) {
		background-size: 70px 70px;
		width: 100px;
		height: 90px;
		border-radius: 50%;
		margin-left: 30px;
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
	@media (max-width: 500px) {
		font-size: 15px;
		margin-bottom: 15px;
	}
`;

const StyledMain3 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #000000;
	color: white;
`;

const StyledSubTitle = styled.div`
	font-size: 50px;
	font-weight: bold;
	margin-bottom: 100px;
	@media screen and (max-width: 1220px) {
		font-size: 40px;
	}
`;

const StyledSkillBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const StyledSkill = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px;
	img {
		width: 200px;
		height: 200px;
	}
	@media screen and (max-width: 1460px) {
		img {
			width: 150px;
			height: 150px;
		}
	}
	@media (max-width: 1220px) {
		img {
			width: 100px;
			height: 100px;
		}
	}
	@media (max-width: 550px) {
		img {
			width: 70px;
			height: 70px;
		}
	}
`;

const StyledSkillName = styled.div`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	@media screen and (max-width: 1220px) {
		font-size: 10px;
	}
	@media (max-width: 370px) {
		font-size: 5px;
	}
`;

const StyledMain4 = styled.div`
	width: 100vw;
	background-color: #efefef;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 150px;
`;

const StyledProjectBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 70px;
	img {
		border: 4px solid black;
		width: 600px;
		height: 350px;
		&:hover {
			transform: scale(1.4);
		}
		@media screen and (max-width: 1470px) {
			border: 4px solid black;
			width: 400px;
			height: 250px;
		}
		@media (max-width: 1170px) {
			border: 4px solid black;
			width: 300px;
			height: 200px;
		}
	}

	@media screen and (max-width: 1030px) {
		display: flex;
		flex-wrap: wrap;
	}
`;

const StyledPrjText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 600px;
`;

const StyledPrjTitle = styled.div`
	font-size: 30px;
	font-weight: bold;
	padding: 12px;
	@media screen and (max-width: 750px) {
		font-size: 25px;
	}
	@media (max-width: 540px) {
		font-size: 20px;
	}
`;

const StyledPrjIntro = styled.div`
	font-size: 17px;
	@media screen and (max-width: 750px) {
		font-size: 13px;
	}
	@media (max-width: 540px) {
		font-size: 10px;
	}
`;

const StyledPrjSkill = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	width: 100%;
	padding-top: 10px;
	div {
		margin: 5px;
		padding: 5px;
		background-color: white;
		border-radius: 10px;
	}
	@media screen and (max-width: 750px) {
		font-size: 13px;
	}
	@media (max-width: 540px) {
		font-size: 10px;
	}
`;

const StyledPrjIcon = styled.div`
	display: flex;
	padding: 10px;
	a {
		color: black;
	}
	svg {
		margin-right: 10px;
	}
`;

function App() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isZoomed, setIsZoomed] = useState(false);

	const handleImageClick = () => {
		setIsZoomed(!isZoomed);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 930 && scrollY < 1860) {
				setIsScrolled(true);
			} else if (scrollY > 2790) {
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
		<Container className="container">
			<Header isScrolled={isScrolled}>
				<StyledHdTitle>
					<StyledTitle>Portfolio</StyledTitle>
				</StyledHdTitle>
				<StyledHdMenu>
					<StyledMenuUl>
						<StyledMenuLi>
							<a href="#main2">Introduce</a>
						</StyledMenuLi>
						<StyledMenuLi>
							<a href="#main3">Skills</a>
						</StyledMenuLi>
						<StyledMenuLi>
							<a href="#main4">Projects</a>
						</StyledMenuLi>
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
			<StyledMain2 id="main2">
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
			<StyledMain3 id="main3">
				<StyledSubTitle>SKILLS</StyledSubTitle>
				<StyledSkillBox>
					<StyledSkill
						data-aos="zoom-in"
						data-aos-delay="400"
						data-aos-duration="1000"
					>
						<img src={html} />
						<StyledSkillName>HTML</StyledSkillName>
					</StyledSkill>
					<StyledSkill
						data-aos="zoom-in"
						data-aos-delay="600"
						data-aos-duration="1000"
					>
						<img src={css} />
						<StyledSkillName>CSS</StyledSkillName>
					</StyledSkill>
					<StyledSkill
						data-aos="zoom-in"
						data-aos-delay="800"
						data-aos-duration="1000"
					>
						<img src={js} />
						<StyledSkillName>JavaScript</StyledSkillName>
					</StyledSkill>
					<StyledSkill
						data-aos="zoom-in"
						data-aos-delay="1000"
						data-aos-duration="1000"
					>
						<img src={react} />
						<StyledSkillName>React</StyledSkillName>
					</StyledSkill>
					<StyledSkill
						data-aos="zoom-in"
						data-aos-delay="1200"
						data-aos-duration="1000"
					>
						<img src={style} />
						<StyledSkillName>Styled-components</StyledSkillName>
					</StyledSkill>
					<StyledSkill
						data-aos="zoom-in"
						data-aos-delay="1400"
						data-aos-duration="1000"
					>
						<img src={node} />
						<StyledSkillName>node.js</StyledSkillName>
					</StyledSkill>
				</StyledSkillBox>
			</StyledMain3>
			<StyledMain4 id="main4">
				<StyledSubTitle>PROJECTS</StyledSubTitle>
				<StyledProjectBox
					data-aos="zoom-in"
					data-aos-delay="400"
					data-aos-duration="1000"
				>
					<StyledPrjText>
						<StyledPrjTitle>KOREATOURISM</StyledPrjTitle>
						<StyledPrjIntro>
							한국의 아름다운 관광지를 손쉽게 찾고,
						</StyledPrjIntro>
						<StyledPrjIntro>편리하게 계획할 수 있는 웹사이트</StyledPrjIntro>
						<StyledPrjSkill>
							<div>React</div>
							<div>Styled-components</div>
							<div>AJAX</div>
							<div>Netlify</div>
						</StyledPrjSkill>
						<StyledPrjIcon>
							<a href="https://github.com/Yunsu0928/koreatourism">
								<BsGithub size="30" />
							</a>
							<a href="https://www.figma.com/file/Z8xD5wT5BRVT19VQMfuznA/KoreaTourism?type=design&node-id=0-1&mode=design&t=RvRjLfJtBIjGV6TB-0">
								<BiLogoFigma size="30" />
							</a>
						</StyledPrjIcon>
					</StyledPrjText>
					<a href="https://koreatourism.netlify.app/">
						<img src={koreagif} />
					</a>
				</StyledProjectBox>
				<StyledProjectBox
					data-aos="zoom-in"
					data-aos-delay="400"
					data-aos-duration="1000"
				>
					<a href="http://stackoverflow-clone-choryun.s3-website.ap-northeast-2.amazonaws.com/">
						<img src={stackgif} />
					</a>
					<StyledPrjText>
						<StyledPrjTitle>STACKOVERFLOW</StyledPrjTitle>
						<StyledPrjIntro>
							스택오버플로우 페이지의 서비스 기능과 디자인을 재현하는 프로젝트
						</StyledPrjIntro>
						<StyledPrjSkill>
							<div>React</div>
							<div>Styled-components</div>
							<div>AWS</div>
						</StyledPrjSkill>
						<StyledPrjIcon>
							<a href="https://github.com/Yunsu0928/seb43_pre_019">
								<BsGithub size="30" />
							</a>
							<a href="https://www.notion.so/clone-c4ad9255713c46298f7e5b21b9704b91?p=bb09bced37c147f381f016062f94c686&pm=s">
								<BiNotepad size="30" />
							</a>
						</StyledPrjIcon>
					</StyledPrjText>
				</StyledProjectBox>
				<StyledProjectBox
					data-aos="zoom-in"
					data-aos-delay="400"
					data-aos-duration="1000"
				>
					<StyledPrjText>
						<StyledPrjTitle>TODO LIST</StyledPrjTitle>
						<StyledPrjIntro>
							사용자의 할일 목록을 관리하는 웹 애플리케이션 프로젝트
						</StyledPrjIntro>
						<StyledPrjSkill>
							<div>React</div>
							<div>CSS</div>
							<div>JsonServer</div>
							<div>AJAX</div>
							<div>Netlify</div>
						</StyledPrjSkill>
						<StyledPrjIcon>
							<a href="https://github.com/Yunsu0928/MytodoList">
								<BsGithub size="30" />
							</a>
							<a href="https://www.figma.com/file/uwnluzvfWox38xKgd1HQNU/Mytodolist?type=design&mode=design&t=RvRjLfJtBIjGV6TB-0">
								<BiLogoFigma size="30" />
							</a>
						</StyledPrjIcon>
					</StyledPrjText>
					<a href="https://hongyunsutodolist.netlify.app/">
						<img src={todogif} />
					</a>
				</StyledProjectBox>
			</StyledMain4>
		</Container>
	);
}

export default App;
