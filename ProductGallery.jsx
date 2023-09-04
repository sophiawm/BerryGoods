import 'footer.css';
export default function Footer() {
    return (
    <>
    <div className="container-product-gallery">
        <img className="product-image" src="" alt="Product Image"/>
        <div className="container-product-details">
            <h3 className="product-name">Product name</h3>
            <p className="product-category">Category</p>
        </div>
        <p className="product-price">Price: 10,00€</p>
        <div className="container-product-buttons">
            <button className="button-details">View details</button>
            <div className="container-actions">
            <button className="button-action"><img className="icon-action" src="" alt="Button Edit"/></button>
            <button className="button-action"><img className="icon-action" src="" alt="Button Delete"/></button>
            </div>
        </div>
    </div>
    </>
);
}
