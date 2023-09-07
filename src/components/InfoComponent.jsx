import React from 'react';
import styled from 'styled-components';
import { ContainerDataShop, Section, H4, P, Button } from '../styles/styles'; // 

const InfoComponent = () => {
  return (
    <ContainerDataShop>
      <Section className="section1">
        <H4>My account</H4>
        <P>daily.design1</P>
      </Section>
      <Section className="section2">
        <H4>My designs</H4>
        <P>4 products</P>
      </Section>
      <Section className="section3">
        <H4>Orders</H4>
        <P>2 orders</P>
      </Section>
      <Section className="section4">
        <H4>Earnings</H4>
        <P>20 €</P>
      </Section>
      <Button>LOG OUT</Button>
    </ContainerDataShop>
  );
};

export default InfoComponent;

