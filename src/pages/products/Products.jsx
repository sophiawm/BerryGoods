import Navbar from '../../components/Header';
import MainButtons from '../../components/StoreMainButtons';
import DesignGallery from '../../components/DesignGallery';
import ProductGallery from '../../components/ProductGallery';
import Footer from '../../components/Footer';

const Products = ()=>{
    return (
        <>
            <Navbar/> 
                <ProductGallery />
                <DesignGallery />
                <MainButtons /> 
            <Footer/>
        </>
    )
}

export default Products