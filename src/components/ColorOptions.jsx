import React, { useEffect, useState } from 'react'
import GetProducts from '../service/GetProducts'
import styled from 'styled-components'

const ColorOptionsWrap = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.8rem; 
`
const ConbinationSelector = styled.h3`
  font: normal 600 clamp(0.688rem, 0.455rem + 1.16vw, 1.5rem) 'Quicksans', sans-serif;
  color: #6134C2;
`

const SelectImageOption__Container = styled.span`
  display: flex;
  width:100%;
  max-width: 6rem;
  height:100%;
  max-height: 6rem;
`

const SelectImageOption__Label = styled.label`
  display: inline-flex; 

`

const SelectImageOption__input = styled.input`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  appearance: unset;
  border-radius: 50%;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 4px 0px #000;
  &:checked {
    background-color: ${(props) => props.hoverBackgroundColor}
  }

`



const ColorOptions = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await GetProducts();  
        console.log(productData)
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct(); 
  }, []);

  return (
    <ColorOptionsWrap>
      <ConbinationSelector>Colors</ConbinationSelector>
      <SelectImageOption__Container>
      {products.map(product => {
        return (
      
        <SelectImageOption__Label htmlFor="color">
        <SelectImageOption__input type='radio' id='color' name='color' backgroundColor={product.color} hoverBackgroundColor={product.color33}/>
        </SelectImageOption__Label>
        )
        
      }) }
        
      </SelectImageOption__Container>    
    </ColorOptionsWrap>
    
  )
}

export default ColorOptions