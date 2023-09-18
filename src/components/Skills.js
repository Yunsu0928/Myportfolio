import styled from "styled-components";

import html from "../assets/icon-html.png";
import css from "../assets/icon-css.png";
import js from "../assets/icon-js.png";
import react from "../assets/icon-react.png";
import style from "../assets/icon-styled-components.png";
import node from "../assets/icon-nodejs.png";

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

const StyledSubTitle = styled.h2`
	border-bottom: 1px solid white;
	font-size: 50px;
	font-weight: bold;
	margin-bottom: 5vw;
	@media screen and (max-width: 1024px) {
		font-size: 40px;
	}
	@media screen and (max-width: 768px) {
		font-size: 25px;
	}
`;

const StyledSkillBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

// flex-wrap 사용으로 px 수정안함
const StyledSkill = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px;
	img {
		width: 150px;
		height: 150px;
	}
	@media screen and (max-width: 1024px) {
		img {
			width: 100px;
			height: 100px;
		}
	}
	@media (max-width: 768px) {
		img {
			width: 70px;
			height: 70px;
		}
	}
	@media (max-width: 550px) {
		img {
			width: 50px;
			height: 50px;
		}
	}
`;

const StyledSkillName = styled.p`
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

function Main3() {
	return (
		<StyledMain3 id="main3">
			<StyledSubTitle>SKILLS</StyledSubTitle>
			<StyledSkillBox>
				<StyledSkill
					data-aos="zoom-in"
					data-aos-delay="100"
					data-aos-duration="500"
				>
					<img src={html} />
					<StyledSkillName>HTML</StyledSkillName>
				</StyledSkill>
				<StyledSkill
					data-aos="zoom-in"
					data-aos-delay="200"
					data-aos-duration="500"
				>
					<img src={css} />
					<StyledSkillName>CSS</StyledSkillName>
				</StyledSkill>
				<StyledSkill
					data-aos="zoom-in"
					data-aos-delay="300"
					data-aos-duration="500"
				>
					<img src={js} />
					<StyledSkillName>JavaScript</StyledSkillName>
				</StyledSkill>
				<StyledSkill
					data-aos="zoom-in"
					data-aos-delay="400"
					data-aos-duration="500"
				>
					<img src={react} />
					<StyledSkillName>React</StyledSkillName>
				</StyledSkill>
				<StyledSkill
					data-aos="zoom-in"
					data-aos-delay="500"
					data-aos-duration="500"
				>
					<img src={style} />
					<StyledSkillName>Styled-components</StyledSkillName>
				</StyledSkill>
				<StyledSkill
					data-aos="zoom-in"
					data-aos-delay="600"
					data-aos-duration="500"
				>
					<img src={node} />
					<StyledSkillName>node.js</StyledSkillName>
				</StyledSkill>
			</StyledSkillBox>
		</StyledMain3>
	);
}

export default Main3;
