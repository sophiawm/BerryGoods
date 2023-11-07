import styled from "styled-components";

export const Header = styled.header`
  background-color: #6134c2;
  font-family: 'Quicksand';
  width: 100%;
  margin: 0;
  padding: 0;
  height: 12vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 768px) {
    width:100%;
    height: 15vh; 
  }
`;

export const Nav = styled.nav`
  width: 100%;
  margin-left:0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;

  @media (min-width: 768px) {
    display: inline-flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height:15vh;
  }
`;

export const Logo = styled.div`
  img {
    width: 6rem;
    margin:10%;
    @media (min-width: 768px) {
      width: 8rem;
      padding: 0.5rem;
      margin-left: 3rem;
    }
  }
`;

export const Menu = styled.ul`
  display: ${props => (props.open ? "block" : "none")};
  background-color: #6134c2;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  text-align: center; 
  position: absolute;
  top: 10%;
  @media (min-width: 768px) {
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    background-color:transparent;
    position: static; 
  }

  li {
    a {
      display:flex;
      flex-direction:column;
      margin:10% 0rem; 
      color: #fff;
      font-size: 1.5rem;
      text-decoration: none;
      padding: 1rem 0rem;

      @media (min-width: 768px) {
        width:10rem;
        font-size: 1.5rem;
      }
    }
  }
`;

export const BurgerIcon = styled.div`
  display: block;
  margin:5%;
  padding: 0;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const IoMdClose = styled.div`
  color: #fff; 
  cursor: pointer;
`;
