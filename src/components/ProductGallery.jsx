import {
  styledWrapperProductGallery,
  styledProductImage,
  styledContainerProductDetails,
  styledProductName,
  styledProductCategory,
  styledProductPrice,
  styledContainerProductButtons,
  styledButtonDetails,
  styledButtonAction,
} from "../styles/ProductGallery.styled.jsx";

export default function ProductGallery() {
  return (
    <>
      <styledWrapperProductGallery className="container-product-gallery">
        <styledProductImage
          className="product-image"
          src="../assets/product1.png"
          alt="Product Image"
        />
        <styledContainerProductDetails className="container-product-details">
          <styledProductName className="product-name">
            Product name
          </styledProductName>
          <styledProductCategory className="product-category">
            Category
          </styledProductCategory>
        </styledContainerProductDetails>
        <styledProductPrice className="product-price">
          Price: 10,00€
        </styledProductPrice>
        <styledContainerProductButtons className="container-product-buttons">
          <styledButtonDetails className="button-details">
            View details
          </styledButtonDetails>
          <styledContainerButtonsActions className="container-actions">
            <styledButtonAction className="button-edit">
              <img className="icon-action" src="" alt="Button Edit" />
            </styledButtonAction>
            <styledButtonAction className="button-delete">
              <img className="icon-action" src="" alt="Button Delete" />
            </styledButtonAction>
          </styledContainerButtonsActions>
        </styledContainerProductButtons>
      </styledWrapperProductGallery>
    </>
  );
}
