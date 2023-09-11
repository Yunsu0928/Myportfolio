import styled from "styled-components";
import { useState, useEffect } from "react";
import AOS from "aos";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { Draggable } from "gsap/Draggable";

import mainimg from "./assets/main.png";
import me4 from "./assets/me4.png";
import me3 from "./assets/me3.png";
import html from "./assets/icon-html.png";
import css from "./assets/icon-css.png";
import js from "./assets/icon-js.png";
import react from "./assets/icon-react.png";
import style from "./assets/icon-styled-components.png";
import node from "./assets/icon-nodejs.png";

const Portfolio = styled.div`
	font-family: "GmarketSansMedium";
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
	@media screen and (max-width: 680px) {
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
	@media screen and (max-width: 1024px) {
		font-size: 20px;
		margin-right: 20px;
	}
	@media screen and (max-width: 680px) {
		font-size: 15px;
	}
	@media screen and (max-width: 575px) {
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
	/* background-size: 400px 400px; */
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
	@media screen and (max-width: 390px) {
		font-size: 30px;
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
	@media screen and (max-width: 390px) {
		font-size: 20px;
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

const StyledSkillTitle = styled.div`
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
`;

const StyledSkillName = styled.div`
	margin-top: 20px;
	font-weight: bold;
	font-size: 20px;
	@media screen and (max-width: 1220px) {
		font-size: 15px;
	}
`;

const StyledMain4 = styled.div``;

const StyledProjectBox = styled.div``;

const StyledPrjText = styled.div``;

const StyledPrjImg = styled.div``;

const Thumbnail = styled.img`
	visibility: visible;
	.active {
		visibility: hidden;
	}
	.flipping {
		visibility: visible;
	}
`;

const Container = styled.div`
	border: 1px solid rgba(255, 255, 255, 0.3);
	position: fixed;
	top: 15px;
	left: 15px;
	right: 15px;
	bottom: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	pointer-events: none;
`;

const Fullsize = styled.img`
	flex-shrink: 0;
	flex-grow: 0;
	height: 100%;
	display: none;
	.active {
		display: block;
	}
`;

function App() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 930 && scrollY < 1860) {
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

	// main4
	gsap.registerPlugin(Flip, Draggable);

	const fullSize = document.querySelector(".full-size"),
		thumbnail = document.querySelector(".thumbnail");

	Draggable.create(thumbnail);
	console.log();

	document.addEventListener("click", () => {
		const state = Flip.getState(".thumbnail, .full-size");

		fullSize.classList.toggle("active");
		thumbnail.classList.toggle("active");

		Flip.from(state, {
			duration: 0.6,
			fade: true,
			absolute: true,
			toggleClass: "flipping",
			ease: "power1.inOut",
		});
	});

	return (
		<Portfolio>
			<Header isScrolled={isScrolled}>
				<StyledHdTitle>
					<StyledTitle>Portfolio</StyledTitle>
				</StyledHdTitle>
				<StyledHdMenu>
					<StyledMenuUl>
						<StyledMenuLi>Introduce</StyledMenuLi>
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
			<StyledMain3>
				<StyledSkillTitle>Skills</StyledSkillTitle>
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
			<StyledMain4>
				<StyledProjectBox>
					<StyledPrjText>
						<div>프로젝트 이름</div>
						<div>프로젝트 설명</div>
					</StyledPrjText>
					<StyledPrjImg>
						<Thumbnail
							className="thumbnail"
							data-flip-id="img"
							src="https://placehold.co/200x200"
						/>

						<Container className="container">
							<Fullsize
								className="full-size"
								data-flip-id="img"
								src="https://placehold.co/600x600"
							/>
						</Container>
					</StyledPrjImg>
				</StyledProjectBox>
			</StyledMain4>
		</Portfolio>
	);
}

export default App;
