import styled from "styled-components";

import me4 from "../assets/me4.png";

const StyledMain2 = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #efefef;
	display: flex;
	justify-content: space-around;
	align-items: center;
	@media screen and (max-width: 1024px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
`;

const StyledImgMe2 = styled.div`
	background-image: url(${me4});
	background-repeat: no-repeat;
	background-size: 14vw 14vw;
	background-position: 1vw;
	width: 15vw;
	height: 15vw;
	background-color: gray;
	border-radius: 50%;
`;

const StyledMsgBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const StyledMsg = styled.p`
	font-size: 3vw;
	margin-bottom: 0.001vw;
	font-weight: bold;
`;

function Introduce() {
	return (
		<StyledMain2 id="main2" className="observed">
			<StyledImgMe2></StyledImgMe2>
			<StyledMsgBox>
				<StyledMsg
					data-aos="fade-up"
					data-aos-delay="100"
					data-aos-duration="500"
				>
					원활한 커뮤니케이션과
				</StyledMsg>
				<StyledMsg
					data-aos="fade-up"
					data-aos-delay="200"
					data-aos-duration="500"
				>
					협업능력을 바탕으로
				</StyledMsg>
				<StyledMsg
					data-aos="fade-up"
					data-aos-delay="300"
					data-aos-duration="500"
				>
					더 나은 솔루션을 찾아내는 것을 추구합니다
				</StyledMsg>
			</StyledMsgBox>
		</StyledMain2>
	);
}

export default Introduce;
