import Navbar from '../../components/Header';
import MainButtons from '../../components/StoreMainButtons';
import DesignGallery from '../../components/DesignGallery';
import Footer from '../../components/Footer';

const Products = ()=>{
    return (
        <>
            <Navbar/> 
                <DesignGallery />
                <MainButtons /> 
            <Footer/>
        </>
    )
}

export default Products