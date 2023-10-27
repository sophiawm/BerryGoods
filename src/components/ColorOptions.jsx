import { useEffect, useState } from 'react'
import GetProducts from '../service/GetProducts'
import styled from 'styled-components'

const ColorOptionsWrap = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.8rem;
  margin: 1rem 0rem 2rem;
`
const ConbinationSelector = styled.h3`
  font-size: 1rem;
  font-family: 'Quicksand'; 
  color: #6134C2;
`

const SelectImageOption__Container = styled.span`
  display: flex;
  width:100%;
  max-width: 6rem;
  height:100%;
  max-height: 6rem;
  gap: 0.8rem;
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

/* 
const ProductDisplay = () => {
  let product = useLoaderData()
  console.log(useLoaderData) */


const ColorOptions = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await GetProducts();  
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