import styled from 'styled-components';
import logo from '../assets/logo-berry-goods.png';

const StyleFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #6134C2;
  width: 100vw;
  height: 7.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;}
    height: 9.8125rem;

.footer-logo{
  width: 6.25rem;
  height: 4.22413rem;
  margin-right: 2rem;
}
.footer-calltoaction{
  color: #F8BAD1;
  font-family: 'Quicksand';
  font-size: 1.1875rem;
  font-weight: 600;
}`;

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