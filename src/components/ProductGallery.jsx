import { useState } from 'react'; 
import { ContainerSingleProductGallery, ProductImage, ContainerProductDetails, 
    ProductName, ProductCategory, ProductPrice, ContainerProductButtons, 
    ButtonDetails, ButtonAction, ContainerButtonsActions, IconAction } from '../styles/ProductGallery.styled'
import { useLoaderData, Link, useNavigate } from 'react-router-dom'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import deleteicon from '../assets/delete-button.png'
import editicon from '../assets/edit-button.png'
import productsService from '../service/productService';



export default function ProductGallery(products) {
    
    const [dataproduct, setDataProduct] = useState()
    const navigate = useNavigate()
    const data = products.products

    function deleteData(id) {
        productsService.deleteProduct(id)
        navigate("/homepage")
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
                        <ButtonAction className="button-delete"onClick={() => deleteData(product.id)} ><IconAction className="icon-action" src={deleteicon} alt="Button Delete"/></ButtonAction>

                        <ButtonAction className="button-edit" ><IconAction className="icon-action" src={editicon} alt="Button Edit" value /></ButtonAction>

                    </ContainerButtonsActions>
                    </ContainerProductButtons>
        </ContainerSingleProductGallery>
        )
    })
    }
    </>
);
}