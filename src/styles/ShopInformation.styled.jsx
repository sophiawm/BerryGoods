import styled from "styled-components";

export const ContainerDataShop = styled.nav`
	width: 30vw;
	display:flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #6134C2;
	color: #F3B605;
	text-align: center;
	@media (max-width: 768px) {
		display:flex;
		width: 80vw;
		height: fit-content;
		padding: 2rem 0rem;
		margin: 3rem 0rem 6rem;
		border-radius: 0.625rem;
		box-shadow: 0px 4px 4px 0px #000;
	}
`;
export const SectionData = styled.nav`
	margin: 2rem 0rem;
`;

export const H4 = styled.h4`
	font-weight: 700;
	font-size: 1.5rem;
`;

export const P = styled.p`
font-weight: 400;
font-size: 1.5rem;
`;
export const Button = styled.button`
	background-color: #F3B605;
	color: #6134C2;
	padding: 1rem 1.5rem;
	font-family: 'Quicksand';
	border: none;
	font-size: 1.25rem;
	border-radius: 0.625rem;
	box-shadow: 0px 4px 4px 0px #000;
	font-weight: 700;
	margin-top: 2rem;
	@media (max-width: 768px) {
		margin-bottom: 3rem;
	}
`;