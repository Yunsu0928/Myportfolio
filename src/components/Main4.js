import styled from "styled-components";

import { BsGithub } from "react-icons/bs";
import { BiLogoFigma, BiNotepad } from "react-icons/bi";

import koreagif from "../assets/gif/koreatourism.gif";
import stackgif from "../assets/gif/stackoverflow.gif";
import todogif from "../assets/gif/todolist.gif";
import schoolgif from "../assets/gif/school_meal.gif";

const StyledMain4 = styled.div`
	width: 100vw;
	background-color: #efefef;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 8vw;
	@media (max-width: 1100px) {
		& > div:nth-child(2n) {
			flex-direction: column-reverse;
		}
	}
`;

const StyledSubTitle = styled.h2`
	font-size: 50px;
	font-weight: bold;
	margin-bottom: 5vw;
	border-bottom: 1px solid black;
	@media screen and (max-width: 1024px) {
		font-size: 40px;
	}
	@media screen and (max-width: 768px) {
		font-size: 25px;
	}
`;

const StyledProjectBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 4vw;
	a {
		position: relative;
		&:after {
			content: "바로가기";
			font-weight: bold;
			transition: all 0.5s;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 97%;
			background: rgba(0, 0, 0, 0.5);
			position: absolute;
			top: 0;
			left: 0;
			color: #fff;
			opacity: 0;
		}
		&:hover:after {
			opacity: 1;
		}
	}
	img {
		border: 4px solid black;
		width: 600px;
		height: 350px;
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

const StyledPrjTitle = styled.h3`
	font-size: 30px;
	font-weight: bold;
	margin: 0;
	@media screen and (max-width: 1024px) {
		font-size: 25px;
	}
	@media (max-width: 768px) {
		font-size: 20px;
	}
	@media (max-width: 540px) {
		font-size: 15px;
	}
`;

const StyledPrjIntro = styled.p`
	font-size: 17px;
	@media screen and (max-width: 750px) {
		font-size: 13px;
	}
	@media (max-width: 540px) {
		font-size: 10px;
	}
`;

const StyledPrjSkill = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	width: 100%;
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

function Main4() {
	return (
		<StyledMain4 id="main4" className="observed">
			<StyledSubTitle>PROJECTS</StyledSubTitle>
			<StyledProjectBox
				data-aos="zoom-in"
				data-aos-delay="200"
				data-aos-duration="500"
			>
				<a
					href="http://schoolmealinfo.s3-website.ap-northeast-2.amazonaws.com/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={schoolgif} />
				</a>
				<StyledPrjText>
					<StyledPrjTitle>SCHOOL MEAL INFORMATION</StyledPrjTitle>
					<StyledPrjIntro>
						국내 학교별 급식 정보를 한 눈에 볼 수 있는 프로젝트
					</StyledPrjIntro>
					<StyledPrjSkill>
						<div>React</div>
						<div>CSS</div>
						<div>AJAX</div>
						<div>AWS</div>
					</StyledPrjSkill>
					<StyledPrjIcon>
						<a
							href="https://github.com/Yunsu0928/school_meal_info"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub size="30" />
						</a>
						<a
							href="https://www.figma.com/file/eY05fu4yulFyhKDcsuPN4j/school_meal?type=design&mode=design&t=u5q9UGutfudrk88K-0"
							target="_blank"
							rel="noreferrer"
						>
							<BiLogoFigma size="30" />
						</a>
					</StyledPrjIcon>
				</StyledPrjText>
			</StyledProjectBox>
			<StyledProjectBox
				data-aos="zoom-in"
				data-aos-delay="200"
				data-aos-duration="500"
			>
				<StyledPrjText>
					<StyledPrjTitle>KOREATOURISM</StyledPrjTitle>
					<StyledPrjIntro>
						한국의 아름다운 관광지를 손쉽게 찾고, 편리하게 계획할 수 있는
						웹사이트
					</StyledPrjIntro>
					<StyledPrjSkill>
						<div>React</div>
						<div>Styled-components</div>
						<div>AJAX</div>
						<div>Netlify</div>
					</StyledPrjSkill>
					<StyledPrjIcon>
						<a
							href="https://github.com/Yunsu0928/koreatourism"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub size="30" />
						</a>
						<a
							href="https://www.figma.com/file/Z8xD5wT5BRVT19VQMfuznA/KoreaTourism?type=design&node-id=0-1&mode=design&t=RvRjLfJtBIjGV6TB-0"
							target="_blank"
							rel="noreferrer"
						>
							<BiLogoFigma size="30" />
						</a>
					</StyledPrjIcon>
				</StyledPrjText>
				<a
					href="https://koreatourism.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={koreagif} />
				</a>
			</StyledProjectBox>
			<StyledProjectBox
				data-aos="zoom-in"
				data-aos-delay="200"
				data-aos-duration="500"
			>
				<a
					href="http://stackoverflow-clone-choryun.s3-website.ap-northeast-2.amazonaws.com/"
					target="_blank"
					rel="noreferrer"
				>
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
						<a
							href="https://github.com/Yunsu0928/seb43_pre_019"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub size="30" />
						</a>
						<a
							href="https://www.notion.so/clone-c4ad9255713c46298f7e5b21b9704b91?p=bb09bced37c147f381f016062f94c686&pm=s"
							target="_blank"
							rel="noreferrer"
						>
							<BiNotepad size="30" />
						</a>
					</StyledPrjIcon>
				</StyledPrjText>
			</StyledProjectBox>
			<StyledProjectBox
				data-aos="zoom-in"
				data-aos-delay="200"
				data-aos-duration="500"
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
						<a
							href="https://github.com/Yunsu0928/MytodoList"
							target="_blank"
							rel="noreferrer"
						>
							<BsGithub size="30" />
						</a>
						<a
							href="https://www.figma.com/file/uwnluzvfWox38xKgd1HQNU/Mytodolist?type=design&mode=design&t=RvRjLfJtBIjGV6TB-0"
							target="_blank"
							rel="noreferrer"
						>
							<BiLogoFigma size="30" />
						</a>
					</StyledPrjIcon>
				</StyledPrjText>
				<a
					href="https://hongyunsutodolist.netlify.app/"
					target="_blank"
					rel="noreferrer"
				>
					<img src={todogif} />
				</a>
			</StyledProjectBox>
		</StyledMain4>
	);
}

export default Main4;
