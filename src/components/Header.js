import styled from "styled-components";

const Container = styled.header`
	background-color: ${({ isScrolled }) => (isScrolled ? "white" : "none")};
	color: ${({ isScrolled }) => (isScrolled ? "black" : "white")};
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	width: 100vw;
	height: 80px;
	opacity: 0.5s;
	z-index: 1;
`;

const StyledHdTitle = styled.div``;

const StyledTitle = styled.h1`
	margin-left: 5vw;
	font-weight: bold;
	a {
		text-decoration: none;
		color: inherit;
		/* color: ${({ isScrolled }) => (isScrolled ? "black" : "white")}; */
		&:visited {
			color: inherit;
		}
	}
	@media screen and (max-width: 1024px) {
		font-size: 25px;
	}
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

const StyledHdMenu = styled.nav`
	display: flex;
	align-items: center;
`;

const StyledMenuUl = styled.ul`
	list-style: none;
	margin-right: 5vw;
`;

const StyledMenuLi = styled.li`
	float: left;
	font-size: 20px;
	margin-right: 3vw;
	a {
		text-decoration: none;
		color: inherit;
		&:visited {
			color: inherit;
		}
	}
	@media screen and (max-width: 1024px) {
		font-size: 20px;
		margin-right: 20px;
	}
	@media (max-width: 768px) {
		font-size: 15px;
	}
	@media (max-width: 480px) {
		font-size: 10px;
	}
`;

function Header({ isScrolled }) {
	return (
		<Container isScrolled={isScrolled} className="header">
			<StyledHdTitle>
				<StyledTitle>
					<a href="#main1">Portfolio</a>
				</StyledTitle>
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
		</Container>
	);
}

export default Header;
