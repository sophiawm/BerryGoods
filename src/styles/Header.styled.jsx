import styled from "styled-components";

export const Header = styled.header`
  background-color: #6134c2;
  width: 100%;
  height: 13vh; 

  @media (min-width: 768px) {
    width:100%;
    height: 20vh; 
  }
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  
  
  @media (min-width: 768px) {
    display:flex;
    flex-direction:row;
    align-items: center;
    width: 100%;
    height:20vh;
  }
`;

export const Logo = styled.div`
  img {
    display:flex;
    width: 4.5rem;
    padding:1.7rem;
    
    @media (min-width: 768px) {
      width: 7.5rem;
      padding:1.5rem;
    
    }
  }
`;

export const Menu = styled.ul`
  display: ${props => (props.open ? "block" : "none")};
  background-color: #6134c2;
  width:100%;
  height:40vh;
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center; 
  position: absolute;
  top: 7rem; 

  @media (min-width: 768px) {
    display: flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    background-color:transparent;
    gap: 1.5rem;
    position: static; 
     
  }

  li {
    a {
      display:flex;
      flex-direction:column;
      margin:10%; 
      color: #fff;
      font-size: 1.5rem;
      text-decoration: none;
      padding: 1rem;

      @media (min-width: 768px) {
        width:10rem;
        font-size: 1.5rem;
        gap:2rem;
      }
    }
  }
`;

export const BurgerIcon = styled.div`
  display: block;
  padding-top:1.7rem;
  

  @media (min-width: 768px) {
    display: none;
  }
`;

export const IoMdClose = styled.div`
  color: #fff; 
  cursor: pointer;
`;
