import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoMdClose } from "react-icons/io";
import {
  Header,
  Nav,
  Menu,
  BurgerIcon,
  Logo,
} from "./styles/Header.styled"; 
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Header>
      <Nav>
        <Logo>
          <img src="src/assets/nav-logo.png" alt="Logo" />
        </Logo>
        {menuOpen ? (
          <BurgerIcon onClick={toggleMenu}>
            <IoMdClose className="burguerIcon" color="#F3B605" size={50} />
          </BurgerIcon>
        ) : (
          <BurgerIcon onClick={toggleMenu}>
            <TiThMenu className="burguerIcon" color="#F3B605" size={50} />
          </BurgerIcon>
        )}
        <Menu open={menuOpen}>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Control Panel</a>
          </li>
          <li>
            <a href="#">Log out</a>
          </li>
        </Menu>
      </Nav>
    </Header>
  );
};

export default Navbar;
