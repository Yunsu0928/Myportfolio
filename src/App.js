import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";

import Header from "./components/Header";
import Main1 from "./components/Main1";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Main4 from "./components/Main4";

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
			<Main1 />
			<Main2 />
			<Main3 />
			<Main4 />
		</Container>
	);
}

export default App;
