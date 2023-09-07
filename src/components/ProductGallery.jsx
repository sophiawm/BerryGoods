
import { ContainerProductGallery, ProductImage, ContainerProductDetails, 
    ProductName, ProductCategory, ProductPrice, ContainerProductButtons, 
    ButtonDetails, ButtonAction, ContainerButtonsActions, IconAction } from '../styles/ProductGallery.styled'
import product1 from '../assets/product1.png'
import deleteicon from '../assets/delete-button.png'
import editicon from '../assets/edit-button.png'
import DeleteButton from '../components/DeleteButton'
export default function ProductGallery() {
    return (
        <>
            <ContainerProductGallery className="container-product-gallery">
                <ProductImage className="product-image" src={product1} alt="Product Image"/>
                <ContainerProductDetails className="container-product-details">
                    <ProductName className="product-name">Product name</ProductName>
                    <ProductCategory className="product-category">Category</ProductCategory>
                </ContainerProductDetails>
                <ProductPrice className="product-price">Price: 10,00€</ProductPrice>
                <ContainerProductButtons className="container-product-buttons">
                    <ButtonDetails className="button-details">VIEW MORE</ButtonDetails>
                    <ContainerButtonsActions className="container-actions">
                        <ButtonAction className="button-edit">
                            <IconAction className="icon-action" src={deleteicon} alt="Button Edit"/>
                        </ButtonAction>
                        <DeleteButton productId={1}>
                            <div className="button-delete">
                                <IconAction className="icon-action" src={editicon} alt="Button Delete" />
                            </div>
                        </DeleteButton>
                    </ContainerButtonsActions>
                </ContainerProductButtons>
            </ContainerProductGallery>
        </>
    );
}
