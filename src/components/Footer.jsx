import React from 'react';
import styled from 'styled-components';

const styleFooter = styled.footer`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;}

.footer-logo{
  width: 6.25rem;
  height: auto;
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
        <footer className="footer-general-container">
          <img className="footer-logo" src="assets/logo-berry-good.png" alt="Berry Goods Logo"></img>
          <h2 className="footer-calltoaction">Sell and buy delicious designs!</h2>
        </footer>
      </>
    );
}