import { useState } from 'react'; 
import { ContainerSingleProductGallery, ProductImage, ContainerProductDetails, 
    ProductName, ProductCategory, ProductPrice, ContainerProductButtons, 
    ButtonDetails, ButtonAction, ContainerButtonsActions, IconAction } from '../styles/ProductGallery.styled'
import { useLoaderData, Link } from 'react-router-dom'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import deleteicon from '../assets/delete-button.png'
import editicon from '../assets/edit-button.png'



export default function ProductGallery(products) {
    const initialData = products.products
    const [data, setData] = useState(initialData); // Estado para almacenar los productos

    // Función para eliminar un producto por su ID
    const deleteProduct = async (productId) => {
        // Realiza la lógica para eliminar el producto en el servidor (usando fetch, axios, etc.)
        // Luego, actualiza el estado para reflejar el cambio en la interfaz.
        try {
            // Realiza la solicitud de eliminación al servidor aquí
            // Supongamos que se ha eliminado con éxito, actualizamos el estado
            const updatedData = data.filter((product) => product.id !== productId);
            setData(updatedData);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };


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

                        <ButtonAction className="button-delete" onClick={async() => deleteData(product.id)}><IconAction className="icon-action" src={editicon} alt="Button Delete" /></ButtonAction>

                    </ContainerButtonsActions>
                    </ContainerProductButtons>
        </ContainerSingleProductGallery>
        )
    })
    }
    </>
);
}








