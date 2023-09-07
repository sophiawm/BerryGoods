import { ContainerProductGallery, ProductImage, ContainerProductDetails, 
    ProductName, ProductCategory, ProductPrice, ContainerProductButtons, 
    ButtonDetails, ButtonAction, ContainerButtonsActions, IconAction } from '../styles/ProductGallery.styled'
import { useLoaderData, Link } from 'react-router-dom'
import product1 from '../assets/product1.png'
import deleteicon from '../assets/delete-button.png'
import editicon from '../assets/edit-button.png'



export default function ProductGallery(products, categories) {
 const data = products.products
 const dataCategory = categories.categories
 console.log(dataCategory)



    return (
    <>
    {data.map(product => {
        return (
            <ContainerProductGallery className="container-product-gallery">
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
                    <ButtonAction className="button-delete"><IconAction className="icon-action" src={editicon} alt="Button Delete"/></ButtonAction>
                </ContainerButtonsActions>
                </ContainerProductButtons>
            </ContainerProductGallery>
        )
    })
    }
   
    </>
);
}