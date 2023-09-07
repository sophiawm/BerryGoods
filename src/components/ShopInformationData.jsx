import React from 'react';
import { ContainerDataShop, SectionData, H4, P, Button } from '../styles/ShopInformation.styled.jsx'

const ShopInformationData = () => {
  return (
    <ContainerDataShop>
      <SectionData className="section1">
        <H4>My account</H4>
        <P>daily.design1</P>
      </SectionData>
      <SectionData className="section2">
        <H4>My designs</H4>
        <P>4 products</P>
      </SectionData>
      <SectionData className="section3">
        <H4>Orders</H4>
        <P>2 orders</P>
      </SectionData>
      <SectionData className="section4">
        <H4>Earnings</H4>
        <P>20 €</P>
      </SectionData>
      <Button>LOG OUT</Button>
    </ContainerDataShop>
  );
};

export default ShopInformationData;

