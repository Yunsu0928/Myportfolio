import styled from "styled-components";

import mainimg from "../assets/main.png";
import me3 from "../assets/me3.png";

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
	background-size: 17vw 20vw;
	margin-top: 5vw;
	width: 25vw;
	height: 25vw;
	background-color: yellow;
	border-radius: 50%;
	@media screen and (max-width: 1024px) {
		margin-top: 10vw;
		margin-bottom: 5vw;
		width: 30vw;
		height: 30vw;
		background-size: 22vw 25vw;
	}
`;

const StyledName = styled.p`
	margin-top: 1vw;
	margin-bottom: 0;
	font-size: 4vw;
	font-weight: bold;
	color: #fff;
`;

const StyledIntro = styled.p`
	margin-top: 0.05vw;
	margin-bottom: 0;
	font-size: 40px;
	font-weight: bold;
	color: white;
	@media screen and (max-width: 1024px) {
		font-size: 30px;
	}
	@media (max-width: 768px) {
		font-size: 20px;
	}
	@media (max-width: 500px) {
		font-size: 10px;
	}
`;

function Main() {
	return (
		<StyledMain1 id="main1">
			<StyledImgBox>
				<StyledImgMe
					data-aos="flip-left"
					data-aos-delay="100"
					data-aos-duration="2000"
				></StyledImgMe>
			</StyledImgBox>
			<StyledName
				data-aos="fade-up"
				data-aos-delay="300"
				data-aos-duration="1000"
			>
				HONG YUN SU
			</StyledName>
			<StyledIntro
				data-aos="fade-up"
				data-aos-delay="500"
				data-aos-duration="1000"
			>
				I’m front-end developer
			</StyledIntro>
		</StyledMain1>
	);
}

export default Main;
