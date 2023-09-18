import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";

import Header from "./components/Header";
import Main from "./components/Main";
import Introduce from "./components/Introduce";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Container = styled.div`
	font-family: "GmarketSansMedium";
	overflow: hidden;
	max-width: 100vw;
`;

function App() {
	const [isScrolled, setIsScrolled] = useState(false);

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
			<Header isScrolled={isScrolled} />
			<Main />
			<Introduce />
			<Skills />
			<Projects />
		</Container>
	);
}

export default App;
