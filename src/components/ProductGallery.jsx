import { useState } from 'react'; 
import { ContainerProductGallery, ContainerSingleProductGallery, ProductImage, ContainerProductDetails, 
    ProductName, ProductCategory, ProductPrice, ContainerProductButtons, 
    ButtonDetails, ButtonAction, ContainerButtonsActions, IconAction } from '../styles/ProductGallery.styled'
import { useLoaderData, Link } from 'react-router-dom'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import deleteicon from '../assets/delete-button.png'
import editicon from '../assets/edit-button.png'



export default function ProductGallery(products) {
    const data = products.products
    const deletefetch = products.products
    function deleteData(id) {
        return deletefetch
    }


    return (
    <>
    {data.map(product => {
        return (
        <ContainerSingleProductGallery className="container-product-gallery">
                    <ProductImage className="product-image" src={product1} alt="Product Image"/>
                    <ContainerProductDetails className="container-product-details">
                        <ProductName className="product-name">{product.name}</ProductName>
                        <ProductCategory className="product-category">Category{product.categories}</ProductCategory>
                    </ContainerProductDetails>
                    <ProductPrice className="product-price">Price: {product.price}€</ProductPrice>
                    <ContainerProductButtons className="container-product-buttons">
                        <Link to={`/products/${product.id}`}>
                        <ButtonDetails className="button-details">VIEW MORE</ButtonDetails>
                        </Link>
                <ContainerButtonsActions className="container-actions">
                        <ButtonAction className="button-edit"><IconAction className="icon-action" src={deleteicon} alt="Button Edit"/></ButtonAction>

                        <ButtonAction className="button-delete" onClick={async() => deleteData}><IconAction className="icon-action" src={editicon} alt="Button Delete" value /></ButtonAction>

                    </ContainerButtonsActions>
                    </ContainerProductButtons>
        </ContainerSingleProductGallery>
        )
    })
    }
    </>
);
}