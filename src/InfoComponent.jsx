import React from 'react';
import styled from 'styled-components';

const ContainerDataShop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6134C2;
  width: 35vw;
`;

const H4 = styled.h4`
  color: #F3B605;
`;

const P = styled.p`
  margin: 0;
  color: #F3B605;
`;

const Button = styled.button`
  background-color: #F3B605;
  color: #6134C2;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  margin-bottom: 2rem;
`;

const InfoComponent = () => {
  return (
    <ContainerDataShop>
      <H4>My account</H4>
      <P>daily.design1 </P>
      <H4>My desings</H4>
      <P>4 products</P>
      <H4>Orders</H4>
      <P>2 orders</P>
      <H4>Earnings</H4>
      <P>20 €</P>
      <Button>LOG OUT</Button>
    </ContainerDataShop>
  );
};

export default InfoComponent;
