import '../../styles/reset.css'
import '../../styles/Dashboard.css'
import ProductGallery from '../../components/ProductGallery.jsx'
import Footer from '../../components/Footer';
import Navbar from '../../components/Header';

function Dashboard() {

    return (
        <>
        <Navbar /> 
        <ProductGallery />
        <Footer />
        </>
    )
}

export default Dashboard