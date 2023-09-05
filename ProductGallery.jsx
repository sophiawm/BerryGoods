const styledContainerProductGallery = styled.div`
    margin: 0;
    padding: 0;
    font-family: 'Quicksand';
    border-radius: 0.5rem;
    background-color: #fff;
`;

const styledProductImage = styled.img`
    border-radius: 0.5rem 0.5rem 0rem 0rem;
    overflow: hidden;
    width: 14.6875rem;
    height: 14.875rem;
`;

const styledContainerProductDetails = styled.div`
    display: inline-flex;
    justify-content: space-between;
    margin: 1.12rem 0.7rem 0rem;
`;

const styledProductName = styled.h3 `
    color: #6134C2;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: -0.03rem;
`;

const styledProductCategory = styled.p `
    @media (min-width: 768px) {
        border-radius: 0.5rem;
        background: #CEBCC3;
        padding: 0.31rem 1.12rem;
        color: #6134C2;
        text-align: center;
        font-size: 0.6875rem;
        font-weight: 600; 
  }
    @media (max-width: 768px) {
        display: none;
  }
`;

const styledProductPrice = styled.p `
    color: #6134C2;
    margin-bottom: 4rem;
    font-size: 0.6875rem;
    font-weight: 600;
`;

const styledContainerProductButtons = styled.div `
    display: inline-flex;
    justify-content: space-between;
    margin: 1.12rem 0.7rem 0rem;
`;

const styledButtonDetails = styled.button `
    color: #F3B605;
    text-align: center;
    font-size: 0.6875rem;
    padding: 0.31rem 0.69rem;
    box-shadow: 0px 4px 0px #000;
`;

const styledContainerButtonsActions = styled.div `
    display: inline-block;
    gap: 0.31rem;
`;

const styledButtonAction = styled.button `
    background-color: #6134C2;
    box-shadow: 0px 4px 0px #000;
    width: 1.625rem;
    height: 1.5rem;
`;
const styledIconAction = styled.img `
    padding: 0.2rem;
    height: auto;
    width: auto;
`;

export default function ProductGallery() {
    return (
    <>
    <styledWrapperProductGallery className="container-product-gallery">
        <styledProductImage className="product-image" src="" alt="Product Image"/>
        <styledContainerProductDetails className="container-product-details">
            <styledProductName className="product-name">Product name</styledProductName>
            <styledProductCategory className="product-category">Category</styledProductCategory>
        </styledContainerProductDetails>
        <styledProductPrice className="product-price">Price: 10,00€</styledProductPrice>
        <styledContainerProductButtons className="container-product-buttons">
            <styledButtonDetails className="button-details">View details</styledButtonDetails>
            <styledContainerButtonsActions className="container-actions">
                <styledButtonAction className="button-edit"><img className="icon-action" src="" alt="Button Edit"/></styledButtonAction>
                <styledButtonAction className="button-delete"><img className="icon-action" src="" alt="Button Delete"/></styledButtonAction>
            </styledContainerButtonsActions>
        </styledContainerProductButtons>
    </styledWrapperProductGallery>
    </>
);
}

