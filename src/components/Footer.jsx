import logo from '../assets/logo-berry-goods.png';
import { StyleFooter } from '../styles/Footer.styled.jsx';

export default function Footer() {
    return (
      <>
        <StyleFooter className="footer-general-container">
          <img className="footer-logo" src={logo} alt="Berry Goods Logo" />
          <h2 className="footer-calltoaction">Sell and buy delicious designs!</h2>
        </StyleFooter>
      </>
    );
}