import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import styled from 'styled-components'
import ColorOptions from './ColorOptions'
import GetProduct from '../service/GetProduct'
import GetCategories from '../service/GetCategories'


const ProductDisplayWrap = styled.section`
  display: flex; 
  justify-content: space-between;
  align-content: center;
  width: 100vw;
  background-color: #F8F3E0 ;
  
`
const ProductDisplay__columns = styled.div`
  display:flex;
  flex-direction: column;
  align-items: start;
  gap: 2rem; 

`
const StoreNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
const StoreName__title = styled.h1`
  font: normal 600 clamp(2.063rem, 1.58rem + 2.41vw, 3.75rem) 'Quicksans', sans-serif; 
  color: #000;
`

const StoreName__subtitle = styled.p`
  font: normal medium 19px/25px 'Poppins';
  color: #000;
`

const ImageContainer = styled.picture`
  background-color: none;
  display: flex;
  width: 100%;
  max-width: 11rem; 
`

const ImageEmbed = styled.img`
  flex-grow: 1;
  width: 0;
  object-fit: contain; 
`
const EditLabel = styled.label`
  display: inline-flex; 

`

const EditInput = styled.input`
  cursor: pointer;
  width: 15rem;
  height: 3rem;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0px 4px 0px #000;
`

/* const GetProductDescription = styled(GetProductName)`
  font-size: clamp(0.688rem, 0.455rem + 1.16vw, 1.5rem);
`

const GetProductCategory = styled(GetProductDescription)` 
`*/



const ProductDisplay = () => {
  let product = useLoaderData()
  console.log(product)

  
 /*  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await GetProduct(2); 
        const categoryData = await GetCategories(productData.categoryId); 
        productData.categoryName = categoryData.categoryName; 
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }; 

    fetchProduct(); 
  }, []);*/
 

  return (
    <ProductDisplayWrap>
      <ProductDisplay__columns>
        <StoreNameContainer>
          <StoreName__title>Daily Design</StoreName__title>
          <StoreName__subtitle>Opened since 2019</StoreName__subtitle>
        </StoreNameContainer>
        <ImageContainer>
          <ImageEmbed src='src/assets/react.svg' alt=''/>
        </ImageContainer>
      </ProductDisplay__columns>
      <ProductDisplay__columns>
      {/* {product.map(product => {
        return  ( */}
          <>
          <EditLabel  htmlFor="name"> 
            <EditInput type='text' id='name' name='name' value={product.name}/>
          </EditLabel>
          
          {/* <GetProductDescription>Descripción del producto: {product.description}</GetProductDescription>
          <GetProductCategory>Categoría del producto: {product.categoryName}</GetProductCategory> */}
        </>
    {/*     )
      }
      )}  
          */}      
      </ProductDisplay__columns>
    </ProductDisplayWrap>
  )
}

export default ProductDisplay



